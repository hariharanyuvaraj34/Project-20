var car, wall, carimage, carimage2, carimage3;
var speed, weight;

function preload() {
  carimage1 = loadImage("CarImage1.png");
  carimage2 = loadImage("CarImage2.png");
  carimage3 = loadImage("CarImage3.png");
}

function setup() {
  createCanvas(1600, 400);
  
  car = createSprite(50, 260, 50, 50);
  car.addAnimation("image", carimage1);
  car.scale = 0.3;
  
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = (80, 80, 80);

  speed = random(55, 90);
  weight = random(400, 1500);
  
  car.velocityX = speed;
}

function draw() {
  background("black");

  if (wall.x - car .x < car.width/2 + wall.width/2 ) {
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / 22509;

    if (deformation > 80 && deformation < 100 && deformation < 180){
      stroke("white");
      fill("white");
      textSize(30);
      textFont("Century Gothic");
      text("Safe For Passengers!!!", 100, 100);
    }

    else if (deformation < 80){
      stroke("white");
      fill("white");
      textSize(30);
      textFont("Century Gothic");
      text("Extremely Safe For Passengers!!!", 100, 100);
    }
    
    else {
      stroke("white");
      fill("white");
      textSize(30);
      textFont("Century Gothic");
      text("Extremely Unsafe For Passengers!!!", 100, 100);
    }
  }
  drawSprites();
}