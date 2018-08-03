function setup() {
  createCanvas(400,400);
}

const rectX = 100;
const rectY = 100;
const rectWidth = 100;
const rectHeight = 20;

let x = rectWidth;

function draw() {


  fill('blue');
  rect(rectX, rectY, x, rectHeight);
  if (x < 300 - rectWidth) {
    x += 2;
  }

}