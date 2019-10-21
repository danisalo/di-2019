
var x = 20 // starting x position to draw
var y = 0  // starting y position to draw
var barHeight = 400 // height of each bar
var barWidth = 10
var spacing = 100 // the vertical space to skip between bars

function setup() {
  createCanvas(700,400)

}

function draw() {
  var now = clock()
  print(now.weekday)
background ('white')
  // xPos = xPos = 1;
  line(0, xPos, width, xPos);

  // measure the current time & calculate the width in pixels of each bar
  var now = clock()
  if (discrete){
    // the map() function lets us *normalize* a value from a starting range then *project* it into another range
    var hourHeight = map(now.hour, 1,12, 0) // from hours (1-12) to pixels (0–maxWidth)
    var minsHeight = map(now.min,  0,60, 0)  // from mins (0–60) to pixels (0–maxWidth)
    var secsHeight = map(now.sec,  0,60, 0)  // from secs (0–60) to pixels (0–maxWidth)
  }else{
    // alternatively, we can use the clock's 'progress' percentages
    hourWidth = maxWidth * now.progress.day
    minsWidth = maxWidth * now.progress.hour
    secsWidth = maxWidth * now.progress.min
  }

  //draw 3 background bars to indicate the max width
  fill(30, 0, 0)
  rect(x, y,                         barWidth,  barHeight)
  rect(x, y +    barWidth+spacing,  barWidth,  barHeight)
  rect(x, y + 2*(barWidth+spacing), barWidth,  barHeight)
  rect(x, y + 3*(barWidth+spacing), barWidth,  barHeight)
  rect(x, y + 4*(barWidth+spacing), barWidth,  barHeight)
  rect(x, y + 5*(barWidth+spacing), barWidth,  barHeight)

  // draw the hours bar at the top...
  //fill(80, 0, 0)
  //rect(x, y,                         hourWidth, barHeight)

  // ...the minutes bar in the middle...
  //fill(150, 0, 0)
  //rect(x, y +    barHeight+spacing,  minsWidth, barHeight)

  // ...and the seconds bar at the bottom
  //fill(255, 0, 0)
  //rect(x, y + 2*(barHeight+spacing), secsWidth, barHeight)

}