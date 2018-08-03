function setup() {
  createCanvas(400,400);
}

function draw() {
  background(200);

  let x1 = width / 2;
  let y1 = height / 2;
  let x2 = mouseX;
  let y2 = mouseY;
  let radius = 50;
  
  //Draw Button
  ellipse(x1, y1, radius * 2, radius*2);

  line(x1, y1, x2, y2);

  let dx = x2-x1;
  let dy = y2-y1;
  let d = sqrt(dx*dx + dy*dy);

  text(d, x1+(x2-x1)/2, y1 + (y2-y1)/2);

  if (d < radius) {
    fill(150);
  } else {
    fill(255);
  }
}