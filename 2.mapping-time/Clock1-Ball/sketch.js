
function setup() {
  createCanvas(600,400)

}
function draw() {
var now = clock()

background (255)
  
  //Progress
  var Sc = now.sec
  var ScHeight = map(Sc, 0,60, 0,400)
  var Mn = now.min
  var MnHeight = map(Mn, 0,60, 0,400)
  var Hr = now.hours
  var HrHeight = map(Hr, 0,24, 0,400)
  var ScP = map(Sc,0,60,0,1)
  
  //Color
  var start = color(245, 114, 105)
  var end = color(97, 6, 1)
  var ScC = lerpColor(start,end,ScP)

  var MnP = map(Mn,0,60,0,1)
  var start2 = color(245, 114, 105)
  var end2 = color(97, 6, 1)
  var MnC = lerpColor(start2,end2,MnP)

  var HrP = map(Hr,0,24,0,1)
  var start3 = color(245, 114, 105)
  var end3 = color(97, 6, 1)
  var HrC = lerpColor(start3,end3,HrP)

  //Lines
  stroke (1)
  line(150, 0, 150, 400)
  stroke(1)
  line(300, 0, 300, 400)
  stroke(1)
  line(450, 0, 450, 400)
  
  //Balls
  fill(ScC)
  noStroke()
  ellipse (150,ScHeight,50)
  fill(MnC)
  noStroke()
  ellipse (300,MnHeight,75)
  fill(HrC)
  noStroke()
  ellipse (450,HrHeight,100)

  }
