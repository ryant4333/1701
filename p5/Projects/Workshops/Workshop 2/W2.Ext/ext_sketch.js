function setup() {
  createCanvas(600,400);
}

let delt = 0.1;

function draw() {
  background(70, 70, 120)

    
  for (i = 0; i < 5; i++) {
    fill('rgba(0, 255, 100, delt)');
    rect(50+i*100, 160, 80, 80, 10);
    delt++;
  }
}