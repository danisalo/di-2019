var YieldTable

function preload(){
  YieldTable = loadTable('data/YieldTable.csv', 'csv', 'header')
}

function setup(){

// Setting Canvas
createCanvas(1900,850)
background(250)

var table = YieldTable
print(table)

////SETTING DATA
var rowHeight = 25 // Row Letting
var colWidth = 100 // Column With

// Typography
fill(30)
noStroke()
textFont("Helvetica Neue")
textSize(16)

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
  var Category = table.getString(2, 0)
  text(Category, x, y-rowHeight)


// Data itself
  textStyle(NORMAL)
  textAlign(CENTER)
  x = 225
  y = 75
  for (var c=1; c<table.getColumnCount(); c++){
     var NYC = table.getNum(2, c)
    text(NYC, x, y)
    y += rowHeight
    }

//// GRAPHIC

push() // Plot Area
translate(40,200)
fill('pink')
rect(0,0,1825,600)

for (var Gridx = 0; Gridx < 1825; Gridx += 1825 / 24) {
for (var Gridy = 0; Gridy < 600; Gridy += 600 / 12) {
	stroke(250);
	strokeWeight(1);
	line(Gridx, 0, Gridx, 600);
	line(0, Gridy, 1825, Gridy);
		}
	}

// Countries
push()
translate(150,550)
  var x2 = 100
  var colWidth2 = 200
textSize(24)
fill(30)
textStyle(BOLD)
textAlign(LEFT)
 for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x2-colWidth2, 0)
    x2 += colWidth2
  }
pop()

push() //NYC

push()
translate(20,250)
strokeWeight(3)
stroke(255);
line(0, 0, 940, 0);
pop()

translate(100,250)

 var WW = 100 // Column With
 var XX = 150 // Align Left Column

strokeWeight(1)
stroke(255);
fill('red')
// tint() //Add opacity


 for (var c=1; c<table.getColumnCount(); c++){
 	var NYCr = table.getNum(2, c)
    ellipse(XX,0,NYCr/10)
    XX += NYCr/10// Width 1st circle - radius = align all left side
	}

pop()

pop()

}