function setup() {
  createCanvas(600,400)

}
function draw() {
var now = clock()
background (255)
  
  //Progress
  var Sc = now.sec
  var ScX = map(Sc, 0,60, 100,400)
  var Mn = now.min
  var MnX = map(Mn, 0,60, 100,400)
  var Hr = now.hours
  var HrX = map(Hr, 0,24, 100,400)

//Color  
  var HrC = map(Hr,0,24,0,255)
  var start = color(255, 171, 69)
  var end = color(237, 138, 0)
  var HrC = lerpColor(start,end,HrX)
  
  //Seconds
  noFill() //Bar
  strokeWeight(1);
  stroke(0);
  rect(100, 50, 400, 150, 5)
  
  fill(49, 196, 12) //Progress
  noStroke()
  rect(100, 50, ScX, 150, 5)
  
  //Minutes
    noFill() //Bar
  strokeWeight(1);
  stroke(0);
  rect(100, 200, 400, 150, 5)
  
  fill(0, 166, 217) //Progress
  noStroke()
  rect(100, 200, MnX, 150, 5)
  
  //Hours
    fill(HrC) //Up
  strokeWeight(1)
  stroke(0)
  rect(HrX, 50, 20, 120)
  
  fill(HrC) //Down
  strokeWeight(1)
  stroke(0)
  rect(HrX, 230, 20, 120)
}