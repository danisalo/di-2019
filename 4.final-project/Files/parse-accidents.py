#!/usr/bin/env python
# encoding: utf-8
"""
parse-accidents.py

Created by Christian Swinehart on 2019/11/25.
Copyright (c) 2019 Samizdat Drafting Co. All rights reserved.
"""

from __future__ import with_statement, division
import sys
import os
import re
# import unicodecsv as csv
import csv
from glob import glob
from pprint import pprint
from os.path import abspath, basename, dirname, exists, splitext
from collections import Counter, defaultdict as ddict, OrderedDict as odict
from subprocess import call
_root = dirname(abspath(__file__))
_mkdir = lambda pth: exists(pth) or os.makedirs(pth)
_s = lambda n: '' if n==1 else 's'

SRC_URL = 'https://data.cityofnewyork.us/api/views/h9gi-nx95/rows.csv?accessType=DOWNLOAD'
SRC_FILE = 'all-collisions.csv'

def cmp_datetime(row):
  d, m, y = row['accident-date'].split('/')
  hr, mn = row['accident-time'].split(':')
  key = map(int, [y, m, d, hr, mn])
  return key

def fetch():
  if not exists(SRC_FILE):
    print "Fetching dataset..."
    call(['curl', SRC_URL, '-o', SRC_FILE])
    print

def split_years(first, last):
  for line in open(SRC_FILE):
    header = ','.join([col.strip().lower().replace(' ','-') for col in line.split(',')])
    break

  print "Filtering by year..."
  _mkdir('byYear')
  for year in range(first, last+1):
    print " ", year
    dst_file = 'byYear/%i.csv'%year
    with file(dst_file, 'w') as f:
      f.write(header+'\n')
    with file(dst_file, 'a') as f:
      call(['grep', '/%i,'%year, SRC_FILE], stdout=f)
  print

def fix_2015():
  # there's a truncated row in 2015; strip it out
  good = 'byYear/2015.csv'
  bad = 'byYear/2015.tmp'
  os.rename(good, bad)
  with file(good, 'w') as f:
    call(['egrep', '-v', "IKEA'S $", bad], stdout=f)
  os.unlink(bad)

def split_boroughs():
  print "Filtering years by borough..."
  _mkdir('byBorough')
  for fn in sorted(glob('byYear/*.csv')):
    year = splitext(basename(fn))[0]
    reader = csv.DictReader(open(fn))
    header = reader.fieldnames
    
    print year
    boros = ddict(list)
    for row in reader:
      boros[row['borough'] or 'UNSPECIFIED'].append(row)

    for boro, accidents in boros.items():
      fn = 'byBorough/%s-%s.csv'%(boro.lower(), year)
      print basename(fn)
      writer = csv.DictWriter(open(fn, 'w'), fieldnames=header)
      writer.writeheader()
      for row in sorted(accidents, key=cmp_datetime):
        writer.writerow(row)
    print

def time_totals():
  print "Counting accidents by hour & borough..."
  years = ddict(dict)
  for fn in sorted(glob('byBorough/*.csv')):
    boro, year = splitext(basename(fn))[0].split('-')
    print " ", boro, year
    per_hour = {h:{"killed":0, "injured":0} for h in range(24)}
    for row in csv.DictReader(open(fn)):
      hour = int(row['accident-time'].split(':')[0].strip())
      for col, val in row.items():
        col_stub = col.split('-')[-1]
        if col_stub in ['killed', 'injured']:
          per_hour[hour][col_stub] += int(val.strip() or 0)
    years[year][boro] = per_hour


  header = ['year', 'borough', 'hour', 'injured', 'killed']
  writer = csv.DictWriter(open('totals-by-borough.csv', 'w'), header)
  writer.writeheader()
  for year in sorted(years):
    for boro in sorted(years[year]):
      for hour in sorted(years[year][boro]):
        row = years[year][boro][hour]
        row.update(year=year, hour=hour, borough=boro.title())
        writer.writerow(row)

def main():
  os.chdir(_root)
  fetch()
  split_years(2012, 2019)
  fix_2015()
  split_boroughs()
  time_totals()

if __name__ == "__main__":
  main()
