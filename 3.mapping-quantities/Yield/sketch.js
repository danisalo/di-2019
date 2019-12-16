var YieldTable

function preload(){
  YieldTable = loadTable('data/YieldFinal.csv', 'csv', 'header')
}

function setup(){

// Setting Canvas
createCanvas(3000,1600)
background(250)

var table = YieldTable
print(table)

////SETTING DATA
var rowHeight = 25 // Row Letting
var colWidth = 175 // Column With

// Typography
fill(30)
noStroke()
textFont("Helvetica Neue")
textSize(16)

// Countries
  var x = 350 // Align Left Column
  var y = 50 // Align Height Column
  textStyle(BOLD)
  textAlign(CENTER)
  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-colWidth, y)
    x += colWidth
    // y += rowHeight
  }

// Categories
  textStyle(BOLD)
  textAlign(RIGHT)
  text('NYC DAYS', 100, 75)
  text('Radius', 100, 125)

// Data itself
  textStyle(NORMAL) // NYC DAYS
  textAlign(CENTER)
  x = 350
  y = 75
  for (var c=1; c<table.getColumnCount(); c++){
     var NYC = table.getNum(2, c)
    text(NYC, x-colWidth, y)
    x += colWidth
    }

  textStyle(NORMAL) // Radius
  textAlign(CENTER)
  x = 350
  y = 125
  for (var c=1; c<table.getColumnCount(); c++){
     var NYC = table.getNum(3, c)
    text(NYC, x-colWidth, y)
    x += colWidth
    }


//// GRAPHIC

push() // Plot Area
translate(50,200)
fill('pink')
rect(0,0,1200,1200)


for (var Gridx = 0; Gridx < 1200; Gridx += 1200 / 36) {
for (var Gridy = 0; Gridy < 1200; Gridy += 1200 / 36) {
  stroke(250);
  strokeWeight(1);
  line(Gridx, 0, Gridx, 1200);
  line(0, Gridy, 1200, Gridy);
    }
  }

push()
translate(150,600)

var XX = 450 // Align Left Column

strokeWeight(1)
stroke(255);
fill('red')

 for (var c=1; c<table.getColumnCount(); c++){
  var NYCr = table.getNum(3, c)
    ellipse(XX,0,NYCr*5)
    XX + 100
  }

pop()

pop()

}