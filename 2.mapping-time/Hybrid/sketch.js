
function setup() {
  createCanvas(600,600)
  angleMode(DEGREES)

}
function draw() {
var now = clock()
background (255)

translate(100,500)
rotate (-90)
  
  //Progress
  var Sc = now.sec
  var Scpos = map(Sc,0,60,90,0)
  var ScStart = color(255, 252, 194)
  var ScEnd = color(237, 225, 0)
  var ScC = lerpColor(ScStart,ScEnd,Sc)

  var Mn = now.min
  var Mnpos = map(Mn,0,60,90,0)
  var MnStart = color(255, 204, 102)
  var MnEnd = color(214, 125, 0)
  var MnC = lerpColor(MnStart,MnEnd,Mn)

  var Hr = now.hours
  var Hrpos = map(Hr,0,23,90,0)
  var HrStart = color(255, 184, 223)
  var HrEnd = color(189, 15, 73)
  var HrC = lerpColor(HrStart,HrEnd,Hr)

  var Day = now.day
  var Daypos = map(Day,1,31,90,0)

  var Ss = now.season
  var SpringC = color(75, 232, 60)
  var SummerC = color(245, 241, 34)
  var AutumnC = color(240, 154, 34)
  var WinterC = color(209, 240, 255)

  // var Mo = color(0, 0, 0)
  // var Tu = color(10, 0, 0)
  // var We = color(20, 0, 0)
  // var Th = color(30, 0, 0)
  // var Fr = color(40, 0, 0)
  // var St = color(50, 0, 0)
  // var Su = color(60, 0, 0)

  //Seasons
  fill(Ss)
  if(Ss == 1) {
  var SpringSummer = lerpColor(SpringC,SummerC,now.progress.season)
  fill(SpringSummer) }
  else if(Ss == 2) {
  var SummerAutumnC = lerpColor(SummerC,AutumnC,now.progress.season)
  fill(SummerAutumnC) }
  else if(Ss == 3) {
  var AutumnWinterC = lerpColor(AutumnC,WinterC,now.progress.season)
  fill(AutumnWinterC) }
  else if(Ss == 4) {
  var WinterSpringC = lerpColor(WinterC,SpringC,now.progress.season)
  fill(WinterSpringC) }
  stroke(100)
  strokeWeight(6)
  arc(0,0,800,800,0,90,PIE)

  //Day of the month
  // fill(Dd)
  // if(Dd == 2) {
  // fill(Mo) }
  // else if(Dd == 3) {
  // fill(Tu) }
  // else if(Dd == 4) {
  // fill(We) }
  // else if(Dd == 5) {
  // fill(Th) }
  // else if(Dd == 6) {
  // fill(Fr) }
  // else if(Dd == 7) {
  // fill(St) }
  // else if(Dd == 1) {
  // fill(Su) }

push()
translate(20,20)
  strokeWeight(40)
  stroke(200) //Day color
  rotate(Daypos)
  line(0,0,355,0)
pop()

//Total Arc
  noFill()
  stroke(100)
  strokeWeight(6)
  arc(0,0,800,800,0,90,PIE)

  //Hours
  fill(HrC)
  stroke(100)
  strokeWeight(6)
  arc(0,0,550,550,0,90,PIE)
push()
  strokeWeight(5)
  stroke(100)
  rotate(Hrpos)
  line(0,0,275,0)
pop()

  //Minutes
  fill(MnC)
  stroke(100)
  strokeWeight(6)
  arc(0,0,450,450,0,90,PIE)
push()
  strokeWeight(5)
  stroke(100)
  rotate(Mnpos)
  line(0,0,225,0)
pop()

  //Seconds
  fill(ScC)
  stroke(100)
  strokeWeight(6)
  arc(0,0,350,350,0,90,PIE)
push()
  strokeWeight(5)
  stroke(100)
  rotate(Scpos)
  line(0,0,175,0)
pop()

  }
