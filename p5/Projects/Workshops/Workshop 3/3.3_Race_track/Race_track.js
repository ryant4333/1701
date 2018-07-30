function setup() {
  createCanvas(600,600);
}

const width = 200;
const height = 100;
let angle1 = 0;
let angle2 = 0;

function draw() {
  background(0,150,0);
  ellipseMode(CENTER);
  strokeWeight(40);
  stroke(200);
  noFill();
  ellipse(300, 300, width, height);

  strokeWeight(1);
  stroke('yellow');
  ellipse(300, 300, width+3, height+3);
  ellipse(300, 300, width-3, height-3);

  angleMode(DEGREES);

  let x1 = (width-20)/2 * cos(angle1);
  let y1 = (height-20)/2 * sin(angle1);

  let x2 = (width+20)/2 * cos(angle2);
  let y2 = (height+20)/2 * sin(angle2);

  noStroke();
  fill(255, 0, 0);
  ellipse(300+x1, 300+y1, 10, 10);

  fill('blue');
  ellipse(300+x2, 300+y2, 10, 10);
  

  angle1++;
  angle2+=2;

}