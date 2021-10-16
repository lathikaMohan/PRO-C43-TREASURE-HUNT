var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("cave.png");
  bg2 = loadImage("treasure7.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("White");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("White")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}
