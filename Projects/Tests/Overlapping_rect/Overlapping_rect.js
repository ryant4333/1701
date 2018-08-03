let x1 = 100;
let y1 = 100;
let x2 = 150;
let y2 = 150;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  fill(100, 0, 0, 0);

  if(mouseIsPressed) {
    x1 += mouseX - pmouseX;
    y1 += mouseY - pmouseY;
    rect(x1,y1,50,50);

    text(mouseX - pmouseX, 100, 100);
  } else {
    rect(x1, y1, 50, 50);
  }

  fill(200, 0, 0, 0.5);
  rect(x2,y2, 50, 50);
}