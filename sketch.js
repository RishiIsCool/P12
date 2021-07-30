var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orangeLeaf,orangeLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeleafImg = loadImage("orangeLeaf.png")
  
}
function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.scale = 1
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites = Math.round(random(1,2));
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApple();
    } else {
      createLeaf();
    }
  }
  drawSprites();
}

function createApple(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.05;
  apple.velocityY = 2;
  apple.lifetime = 180;
}
function createLeaf() {
  orangeLeaf = createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeleafImg);
  orangeLeaf.scale = 0.05;
  orangeLeaf.velocityY = 2;
  orangeLeaf.lifetime = 180;
}


