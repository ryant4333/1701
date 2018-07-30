let img;

function preload() {
  img = loadImage('Images/Liv_logo.jpg');
  //img = loadImage('https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/170px-Liverpool_FC.svg.png');

}

function setup() {
  createCanvas(400,400);
}


function draw() {
  image(img, 100, 100);

}