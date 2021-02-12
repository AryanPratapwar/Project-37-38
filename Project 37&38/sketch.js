var monkey, monkey_running;
var ground, backImage, bckGround;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var score;


function preload() {


  backImage = loadImage("8bkg.PNG");

  monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");



}

function setup() {
  createCanvas(600, 600);

  // bckGround = createSprite(200, 200, 20, 20);
  // bckGround.addImage(backImage);
  // bckGround.x = bckGround.width / 2;
  // bckGround.scale = 1.2  ;
 

  monkey = createSprite(100, 445, 20, 20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 450, 2000, 10);
  ground.x = ground.width / 2;
  ground.visible = false;


  FoodGroup = createGroup();
  obstaclesGroup = createGroup();

}

function draw() {
  background(255);
  //ground.velocityX = +2;
  //bckGround.velocityX = -2;
  monkey.velocityX= +2;

  imageMode(CENTER);
  image(backImage,200,200,2000,600);
  

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  // if (bckGround.x < 0) {
  //   bckGround.x = bckGround.width / 2;
  // }

  if (keyDown("space") && monkey.y >= 414) {
    monkey.velocityY = -18;
  }

  if (keyDown("space") && monkey.y >= 408 && monkey.scale == 0.12) {
    monkey.velocityY = -18;
  }

  if (keyDown("space") && monkey.y >= 402 && monkey.scale == 0.14) {
    monkey.velocityY = -18;
  }

  if (keyDown("space") && monkey.y >= 395 && monkey.scale == 0.16) {
    monkey.velocityY = -18;
  }

  if (keyDown("space") && monkey.y >= 389 && monkey.scale == 0.18) {
    monkey.velocityY = -18;
  }

  if (FoodGroup.isTouching(monkey)) {
    score = score + 2;
    FoodGroup.destroyEach();
  }

  if (obstaclesGroup.isTouching(monkey)) {
    monkey.scale = 0.10;
  }

  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

  console.log(monkey.y);
 // Food();
  //Obstacles();
 // increaseScaling();

camera.position.x= monkey.x;

  drawSprites();
}

function Food() {

  if (frameCount % 290 === 0) {
    banana = createSprite(600, 250, 10, 10);
    banana.y = Math.round(random(200, 300));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 285;
    FoodGroup.add(banana);
  }
}

function Obstacles() {

  if (frameCount % 300 === 0) {
    obstacle = createSprite(600, 450, 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.lifetime = 275;
    obstacle.velocityX = -3;
    obstacle.scale = 0.1;
    obstaclesGroup.add(obstacle);
  }
}


function increaseScaling() {
  switch (score) {
    case 10:
      monkey.scale = 0.12;
      break;
    case 20:  
      monkey.scale = 0.14;
      break;
    case 30:
      monkey.scale = 0.16;
      break;
    case 40:
      monkey.scale = 0.18;
      break;
    default:
      break;
  }
}