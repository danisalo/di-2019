var CrashTable

function preload(){
  CrashTable = loadTable('data/crashes.csv', 'csv', 'header')
}

function setup(){

// Setting Canvas
createCanvas(3000,1600)
background(250)

var table = CrashTable
print(table)

////SETTING DATA
var rowHeight = 25 // Row Letting
var colWidth = 100 // Column With

// Typography
fill(30)
noStroke()
textFont("Helvetica Neue")
textSize(16)

// Categories
  var x = 350 // Align Left Column
  var y = 50 // Align Height Column
  textStyle(BOLD)
  textAlign(CENTER)
  for (var c=0; c<table.getColumnCount(); c++){
    text(table.columns[c], x-colWidth, y)
    x += colWidth

  }

// let table;

// function preload() {
//   table = loadTable('data/crashes.csv', 'csv', 'header');
// }

// function setup() {

//   // Typography
// fill(30)
// noStroke()
// textFont("Helvetica Neue")
// textSize(16)

//   let tableArray = table.getArray();
//   for (let i = 0; i < tableArray.length; i++) {
//     print(tableArray[i]);
//   }
}