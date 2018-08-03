function setup() {
  createCanvas(400,400);
}

function draw() {
  fill('blue');
  ellipse(100, 100, 50, 50);

  fill('pink');
  rect(100, 100, 60, 30);

  line(300, 200, 300, 300);

  fill(0, 350, 0);
  triangle(100, 300, 100, 350, 150, 300);
}