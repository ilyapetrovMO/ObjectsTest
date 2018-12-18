
var stars = [];
var count = 600;

function preload(){
  billyImg = loadImage('billyChristmas.jpg');
  gachi = loadSound('gachiSong.mp3');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);

  var counter = 0;
  var x       = random(0, width);
  var y       = random(0, height);
  var speed   = random(3,10);

   while (counter < count) {
      x       = random(0, width);
      y       = random(0, height);
      speed   = random(6,10);
      stars[counter] = new Star (x,y,speed,speed);
      counter++;
   }
}

function draw() {
  background(0);
  if (gachi.isPlaying()){}
  else gachi.play();
  image(billyImg, width/2-billyImg.width/2,height/2-billyImg.height/2)

  var counter = 0;
    while (counter < count){
      stars[counter].draw();
      stars[counter].update();
      counter++;
    }
}

function Star(_x, _y, _br, _speed){
  this.x = _x;
  this.y = _y;
  this.brightness = _br;
}

Star.prototype.draw = function () {
  fill(250,100);
  ellipse(this.x, this.y, this.brightness, this.brightness);
}

  Star.prototype.update = function() {
    var speed = map(this.brightness, 3, 10, 1, 4);
    this.y = this.y + speed;
    if(this.y > height) this.y = -30;
}