var YieldTable

function preload(){
  YieldTable = loadTable('data/YieldTable.csv', 'csv', 'header')
}

function setup(){

// Setting Canvas
 createCanvas(1080,1920)
 background(230)

 var table = YieldTable
 print(table)

// Typography
  textFont("Helvetica Neue")
  textSize(16)
  fill(30)
  noStroke()

  var rowHeight = 25 // Row Letting
  var colWidth = 100 // Column With

// Contries
  var x = 250 // Align Left Column
  var y = 75 // Align Height Column
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-colWidth, y)
    y += rowHeight
  }


 // Categories
  x = 225 // Align Left Row
  y = 75 // Align Height Row
  textStyle(BOLD)
  textAlign(CENTER)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth
  }

// Data itself
  textStyle(NORMAL)
  textAlign(CENTER)
  x = 225
  for (var r=0; r<table.getRowCount(); r++){
    y = 75
    for (var c=1; c<table.getColumnCount(); c++){
      var value = table.getNum(r, c)
      text(value, x, y)
      y += rowHeight
    }
    x += colWidth
  }

}