
var img;
let imgx = 0;
let imgy = 0;
let destx = 0;
let desty = 0;

let targetx = 300;
let targety = 100;

function preload() {
  img = loadImage('https://vignette.wikia.nocookie.net/pokemonfakemon/images/1/17/Poliwhirl_Dream.png/revision/latest?cb=20110910231534');
}

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(200);

  if (imgy < desty) {
    imgy++;
  }
  if (imgy > desty) {
    imgy--;
  }
  if (imgx < destx) {
    imgx++;
  }
  if (imgx > destx) {
    imgx--;
  }
  imageMode(CENTER);
  image(img, imgx, imgy, 100, 100); 

  ellipse(targetx, targety, 40, 40);

  text(dist(imgx, imgy, targetx, targety), 70, 70);

}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    destx += 20;
  }
  if (keyCode == DOWN_ARROW) {
    desty += 20;
  }
  if (keyCode == LEFT_ARROW) {
    destx -= 20;
  }
  if (keyCode == UP_ARROW) {
    desty -= 20;
  }

  if (dist(imgx, imgy, targetx, targety) < 100) {
    targetx = 300;
    targety = 300;
  }
}