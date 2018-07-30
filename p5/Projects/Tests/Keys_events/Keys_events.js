function setup() {
  createCanvas(400,400);
}

let x = 0;
let y = 0;
let destx = 0;
let desty = 0;

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
  rect(x, y, 100, 100); 

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