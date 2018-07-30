function setup() {
  createCanvas(400,400);
}

let angle = 0;

function draw() {
  background(200);

  angleMode(DEGREES);

  let centreX = width /2;
  let centreY = height /2;
  let radius = 100;
  let x = radius * cos(angle);
  let y = radius * sin(angle);

  ellipse(centreX + x, centreY + y, 20, 20);

  angle += 5;

}