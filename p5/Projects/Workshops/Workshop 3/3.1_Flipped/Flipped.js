function setup() {
  createCanvas(600,600);
}

let x1 = 300;
let y1 = 300;
let x2 = 350;
let y2 = 300;
let x3 = 300;
let y3 = 300;
let point = 100;

function draw() {
  background(200);

  line(0, 300, 600, 300);

  if (mouseY > 300) {
    triangle(x1,y1,x2,y2,x3,y3-point);
  } else {
    triangle(x1,y1,x2,y2,x3,y3+point);
  }

}