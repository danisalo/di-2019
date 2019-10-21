
function setup() {
  createCanvas(600,400)
  angleMode(DEGREES)

}
function draw() {
var now = clock()
background (255)
  
  //Progress
  var Sc = now.sec
  var Scpos = map(Sc, 0,60, 0,360)
  var Mn = now.min
  var Mnpos = map(Mn, 0,60, 0,360)
  var Hr = now.hours
  var Hrpos = map(Hr, 0,24, 0,360)

  //Color
  var start = color(255, 249, 82)
  var end = color(255, 221, 0)
  var ScC = lerpColor(start,end,Scpos)

  var MnP = map(Mn,0,60,0,1)
  var start2 = color(255, 197, 23)
  var end2 = color(252, 156, 10)
  var MnC = lerpColor(start2,end2,Mnpos)

  var HrP = map(Hr,0,24,0,1)
  var start3 = color(250, 96, 0)
  var end3 = color(245, 57, 0)
  var HrC = lerpColor(start3,end3,Hrpos)
  
  //Seconds
  noFill()
  stroke(220)
  strokeWeight(10)
  ellipse(300,200,100,100) 
push()
  translate(300,200)
  rotate(-90)
  stroke(ScC)
  arc(0,0,100,100,0,Scpos)
pop()

  //Minutes
  noFill()
  stroke(220)
  strokeWeight(10)
  ellipse(300,200,160,160)
push()
  translate(300,200)
  rotate(-90)
  stroke(MnC)
  arc(0,0,160,160,0,Mnpos)
pop()

  //Hours
  noFill()
  stroke(220)
  strokeWeight(10)
  ellipse(300,200,220,220)
push()
  translate(300,200)
  rotate(-90)
  stroke(HrC)
  arc(0,0,220,220,0,Hrpos)
pop()


  }
