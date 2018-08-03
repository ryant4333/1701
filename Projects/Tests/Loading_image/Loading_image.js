let img;

function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/170px-Liverpool_FC.svg.png');
  img2 = loadImage('https://vignette.wikia.nocookie.net/pokemonfakemon/images/1/17/Poliwhirl_Dream.png/revision/latest?cb=20110910231534');
}

function setup() {
  createCanvas(400,400);
}


function draw() {
  image(img, 100, 100);
  image(img2, 300, 300);
}