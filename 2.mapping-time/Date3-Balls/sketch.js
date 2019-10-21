
function setup() {
  createCanvas(500,400)

}
function draw() {
var now = clock()

background (255)
  
var Month = now.month

var Spring = color(75, 232, 60) //3 4 5 
var Summer = color(245, 241, 34) //6 7 8
var Autumn = color(240, 154, 34) //9 10 11
var Winter = color(209, 240, 255) //12 1 2

stroke(100)
strokeWeight(3)

fill(Winter)
//December
if (Month != 12) {
ellipse(400,300,50,50)
}
else if (Month = 12) {
rect(375,275,50,50)
}

//January
if (Month != 1) {
ellipse(100,100,50,50)
}
else if (Month = 1) {
rect(75,75,50,50)
}

//February
if (Month != 2) {
ellipse(200,100,50,50)
}
else if (Month = 2) {
rect(175,75,50,50)
}


fill(Spring)
//March
if (Month != 3) {
ellipse(300,100,50,50)
}
else if (Month = 3) {
rect(275,75,50,50)
}

//April
if (Month != 4) {
ellipse(400,100,50,50)
}
else if (Month = 4) {
rect(375,75,50,50)
}

//May
if (Month != 5) {
ellipse(100,200,50,50)
}
else if (Month = 5) {
rect(75,175,50,50)
}


fill(Summer)
//June
if (Month != 6) {
ellipse(200,200,50,50)
}
else if (Month = 6) {
rect(175,175,50,50)
}

//Julio
if (Month != 7) {
ellipse(300,200,50,50)
}
else if (Month = 7) {
rect(275,175,50,50)
}

//Agosto
if (Month != 8) {
ellipse(400,200,50,50)
}
else if (Month = 8) {
rect(375,175,50,50)
}

fill(Autumn)
//Septiembre
if (Month != 9) {
ellipse(100,300,50,50)
}
else if (Month = 9) {
rect(75,275,50,50)
}

//October
if (Month != 10) {
ellipse(200,300,50,50)
}
else if (Month = 10) {
rect(175,275,50,50)
}

//Noviembre
if (Month != 11) {
ellipse(300,300,50,50)
}
else if (Month = 11) {
rect(275,275,50,50)
}


}