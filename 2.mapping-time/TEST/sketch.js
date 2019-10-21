
function setup() {
  createCanvas(600,400)
  angleMode(DEGREES)

}
function draw() {
background (255)
  
  var Sg = second()
  var Sgpos = map(Sg, 0,60, 0,360)
  var Mn = minute()
  var Mnpos = map(Mn, 0,60, 0,360)
  var Hr = hour()
  var Hrpos = map(Hr, 0,24, 0,360)
  var MinutesP = map(Mn,0,60,0,110)
  
  noFill()
  stroke(220)
  strokeWeight(10)
  
  //STATIC
  ellipse(300,200,100,100) //Seconds
  
  ellipse(300,200,160,160) //Minutes
  
  ellipse(300,200,220,220) //Hours
  
  
  //MOVING
  translate(300,200)
  rotate(-90)
  stroke(100)
  arc(0,0,100,100,0,Sgpos) //Seconds
  
  arc(0,0,160,160,0,Mnpos) //Minutes
  
  arc(0,0,220,220,0,Hrpos) //Hours
  
  line(0,0,MinutesP,0)

  }
