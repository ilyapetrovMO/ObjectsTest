
var stars = [];
var count = 200;

function setup() {
  createCanvas(1000, 700);
  noStroke();
  var counter = 0;
  while (counter < count) {
    stars[index++] = new Star (random(0, width),random(0,height),100);
    counter++;
  }
}

function draw() {
  var counter = 0;
  while (counter < count){
    stars[counter].draw();
  }
}

function mouseIsPressed() {
  
}

function Star(_x, _y, _br){
  this.x = _x;
  this.y = _y;
  this.brightness = _br;
}

Star.prototype.draw = function () {
  fill(255);
  ellipse(this.x, this.y, 6, 6);
}