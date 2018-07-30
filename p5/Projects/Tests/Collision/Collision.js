function setup() {
  createCanvas(400,400);
}

let img;
let imgx = 0;
let imgy = 0;
let targetx = 0;
let targety = 0;

function preload() {
  img = loadImage('Poliwhirl.jpg');
}

function draw() {
  background(200);

  if (y < desty) {
    y++;
  }
  if (y > desty) {
    y--;
  }
  if (x < destx) {
    x++;
  }
  if (x > destx) {
    x--;
  }
  image(img, x, y, 100, 100); 

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
}