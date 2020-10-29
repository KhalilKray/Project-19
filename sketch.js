var FoodGroup,BananaImage;
var ObstacleGroup,ObstacleImage;
var Background,BackgroundImage;
var Monkey,MonkeyRunning;
var Ground,Score;

function preload() {
  BananaImage = loadImage("banana.png");
  ObstacleImage = loadImage("stone.png");
  BackgroundImage = loadImage("jungle.jpg");
  MonkeyRunning = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}

function setup() {
  createCanvas(400, 400);
  
  FoodGroup = createGroup();
  ObstacleGroup = createGroup();
  
  Background = createSprite(200,200,400,400);
  Background.addImage(BackgroundImage);
  Background.x = Background.width/2;
  Background.velocityX = -3;
  
  Monkey = createSprite(60,360,20,20);
  Monkey.addAnimation("run",MonkeyRunning);
  Monkey.scale = 0.1;
  
  Ground = createSprite(200,395,400,10);
  Ground.visible = false;
  
  Score = 0;
  
}

function draw() {
  background(220);
  
  if(Background.x < 0) {
    Background.x = Background.width/2;
  }
  
  if(FoodGroup.isTouching(Monkey)) {
    Score = Score + 10;
    FoodGroup.destroyEach();
  }
  
  if(ObstacleGroup.isTouching(Monkey)) {
    Score = 0;
    Monkey.scale = 0.1;
    Monkey.x = 50;
    Monkey.y = 360;
  }
  
  if(keyDown("space")) {
    Monkey.velocityY = -12
  }
  
  if(Monkey.y < 200) {
    Monkey.velocityY = Monkey.velocityY + 0.8;
  }
  
  switch(Score) {
    case 10: Monkey.scale = 0.2;
      break;
    case 20: Monkey.scale = 0.3;
      break;
    case 30: Monkey.scale = 0.4;
      break;
    case 40: Monkey.scale = 0.5;
      break;
    case 50: Monkey.scale = 0.6;
      break;
    case 60: Monkey.scale = 0.7;
      break;
    case 70: Monkey.scale = 0.8;
      break;
    case 80: Monkey.scale = 0.9;
      break;
    case 90: Monkey.scale = 1;
      break;
    case 100: Monkey.scale = 0.2;
      break;
    default : break;
  }
  
  Monkey.collide(Ground);
  
  SpawnFood();
  
  SpawnStone();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + Score,300,40);
  
}

function SpawnFood() {
  
  if (frameCount % 100 === 0) {
    var Banana = createSprite(500,320,40,10);
    var R = random(120,200);
    Banana.y = random(120,200);
    Banana.addImage(BananaImage);   
    Banana.scale = 0.1;
    Banana.velocityX = -4;
    Banana.lifetime = 125;
    
    FoodGroup.add(Banana);
  }
}

function SpawnStone() {
  
  if (frameCount % 300 === 0) {
    var Stone = createSprite(500,370,40,10);
    Stone.addImage(ObstacleImage);   
    Stone.scale = 0.1;
    Stone.velocityX = -4;
    Stone.lifetime = 125;
    
    ObstacleGroup.add(Stone);
  }
}
