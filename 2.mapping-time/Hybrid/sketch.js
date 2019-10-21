
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
  // var DayStart = color(255, 204, 102)
  // var DayEnd = color(214, 125, 0)
  // var DayC = lerpColor(DayStart,DayEnd,Day) 

  var Ss = now.season
  var SpringC = color(75, 232, 60)
  var SummerC = color(245, 241, 34)
  var AutumnC = color(240, 154, 34)
  var WinterC = color(209, 240, 255)

  // var D = now.day
  // var Dpos = map(D, 1,31,0,90)


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
push()
translate(3,3)
  strokeWeight(20)
  stroke(200) //color dia
  rotate(Daypos)
  line(0,0,388,0)
pop()

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




  //Line
  // strokeWeight(10)
  // stroke(100)
  // rotate(Dpos)
  // line(0,0,300,0)

  }
