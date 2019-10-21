
function setup() {
  createCanvas(600,400)
  angleMode(DEGREES)

}
function draw() {
var now = clock()
background (255)
  

  //Progress
  var SS = now.season
  var D = now.day
  var Dpos = map(D, 1,31,0,90)
  var SpringC = color(75, 232, 60)
  var SummerC = color(245, 241, 34)
  var AutumnC = color(240, 154, 34)
  var WinterC = color(209, 240, 255)
  translate(150,350)
  
  //Color
  rotate(-90)
  stroke(100)
  strokeWeight(10)
  fill(SS)

  if(SS == 1) {
  var SpringSummer = lerpColor(SpringC,SummerC,now.progress.season)
  fill(SpringSummer) }
  else if(SS == 2) {
  var SummerAutumnC = lerpColor(SummerC,AutumnC,now.progress.season)
  fill(SummerAutumnC) }
  else if(SS == 3) {
  var AutumnWinterC = lerpColor(AutumnC,WinterC,now.progress.season)
  fill(AutumnWinterC) }
  else if(SS == 4) {
  var WinterSpringC = lerpColor(WinterC,SpringC,now.progress.season)
  fill(WinterSpringC) }

  //Line
  arc(0,0,600,600,0,90,PIE)
  
  strokeWeight(10)
  stroke(100)
  rotate(Dpos)
  line(0,0,300,0)

  }
