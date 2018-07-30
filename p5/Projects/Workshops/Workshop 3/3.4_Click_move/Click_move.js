function setup() {
  createCanvas(600,600);
}

let x = 100;
let y = 100;

function draw() {
  background(200);

  fill(100);

  if(mouseIsPressed) {
    x += mouseX - pmouseX;
    y += mouseY - pmouseY;
    rect(x,y,50,50);

    text(mouseX - pmouseX, 100, 100);
  } else {
    rect(x, y, 50, 50);
  }
}