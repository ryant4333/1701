var img;

function preload() {
  img = loadImage("https://vignette.wikia.nocookie.net/pokemonfakemon/images/1/17/Poliwhirl_Dream.png/revision/latest?cb=20110910231534");
  img2 = loadImage("Images/Poliwhirl.jpg");
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  image(img, 100, 100);
  image(img2, 200, 200);
}