var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 50);

  wall = createSprite(1500, 200, 60, height/2);

  speed = random(55, 90);
  weight = random(400, 1500);

  car.velocityX = speed;
}

function draw() {
  background(255,255,255);

  textSize(20);
  text("Speed: " + Math.round(speed), 1300, 50);
  text("Wieght: " + Math.round(weight), 1300, 100);

  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed/22509;

    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
      fill(255, 0, 0)
      text("Deformation: " + Math.round(deformation), 1050, 100);
      text("Deformation Level: DANGER", 1050, 50);
    }else if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
      fill(230, 230, 0)
      text("Deformation: " + Math.round(deformation), 1050, 100);
      text("Deformation Level: Intermediate", 1000, 50);
    }else if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
      fill(0, 255, 0)
      text("Deformation: " + Math.round(deformation), 1150, 100);
      text("Deformation Level: Safe", 1050, 50);
    }
  }

  drawSprites();
}