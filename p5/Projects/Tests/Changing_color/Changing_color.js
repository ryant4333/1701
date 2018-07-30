function setup() {
  createCanvas(400,400);
}

let r = 0;
let delta = 1;

function draw() {
  fill(r, 0, 0);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);

  if (r >= 255 || r < 0) {
    delta = -delta;
  }
  r += delta;

}