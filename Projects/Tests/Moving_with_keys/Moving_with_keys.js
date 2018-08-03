function setup() {
  createCanvas(400,400);
}

let x = 0;
let y = 0;

function draw() {
  background(200);

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }
  rect(x, y, 100, 100); 

}