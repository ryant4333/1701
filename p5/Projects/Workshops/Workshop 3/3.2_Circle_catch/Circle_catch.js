function setup() {
  createCanvas(600,600);
}

let x = 50;
let y = 600/2;
let velocity = 5;
let radius = 50;

function draw() {
  background(200);

  let dx = mouseX-x;
  let dy = mouseY-y;
  let d = sqrt(dx*dx + dy*dy);

  if (d < radius/2) {
    fill(150);
    ellipse(x, y, radius);
  } else {
    fill(255);
    if (x < 550 && x >= 50) {
      ellipse(x, y, radius);
    } else {
      velocity = -velocity;
    }
    x+= velocity;

  }

}