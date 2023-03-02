// sketch.js

var cnv;
let moverX = 10;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(400,400);
  centerCanvas();
  background(255, 0, 200);
}

function windowResized() {
  centerCanvas();
}

function mousePressed(){
  moverX = 10;
}

function draw() {
   //background(220);
  ellipse(mouseY, moverX, moverX, moverX);
  ellipse(moverX, mouseX, moverX, moverX);
  moverX+=5;
}
