function setup() {
  createCanvas(400,400);
}


function draw() {
  background(200);

  fill(255);
  rectMode(CENTER);
  rect(200, 200, 100, 100, 20);

  fill(0);
  text('(' + mouseX + ',' + mouseY + ')', 200, 200);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  textSize(20);
}