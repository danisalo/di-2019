function setup() {
  createCanvas(600,400)

}
function draw() {
var now = clock()
background (255)


// for(var i = 0; i < array.lenght; i++)

//Progress
var Day = now.weekday
var Daypos = map(Day, 1,7, 37.5,487.5)
var DayX = now.progress.weekday
var DayXpos = map(DayX, 0,0.1, 37.5,487.5)

var mo = 37.5
var tu = mo + 75
var we = tu + 75
var th = we + 75
var fr = th + 75
var st = fr + 75
var su = st + 75

//Monday
stroke(0)
strokeWeight(3)
fill(200)
if (Day = 2) {
rect(mo,25,75,350,5)
} else {
rect(mo,50,75,300,5)
}

//Tuesday
stroke(0)
strokeWeight(3)
fill(200)
if (Day = 3) {
rect(tu,25,75,350,5)
} else {
rect(tu,50,75,300,5)
}

//Wednesday
stroke(0)
strokeWeight(3)
fill(200)
if (Day = 4) {
rect(we,25,75,350,5)
} else {
rect(we,50,75,300,5)
}

//Thursday
stroke(0)
strokeWeight(3)
fill(200)
if (Day = 5) {
rect(th,25,75,350,5)
} else {
rect(th,50,75,300,5)
}

//Friday
stroke(0)
strokeWeight(3)
fill(200)
if (Day = 6) {
rect(fr,25,75,350,5)
} else {
rect(fr,50,75,300,5)
}

//Saturday
stroke(0)
strokeWeight(3)
fill(200)
if (Day = 7) {
rect(st,25,75,350,5)
} else {
rect(st,50,75,300,5)
}

//Sunday
stroke(0)
strokeWeight(3)
fill(200)
if (Day = 1) { 
rect(su,25,75,350,5)
} else {
rect(su,50,75,300,5)
}


//Line
stroke(0)
strokeWeight(5)
line(DayXpos,25,DayXpos,3) // x1,y1,x2,y2
  
  noStroke()
  fill(0)
  text('Today is the ' + Day, 20, 20);
  text('The value of Day is ' + Day, 20, 30);
//   //text('Today is the ' + Daypos, 50, 100);
}