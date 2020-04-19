var car1,car2,ca3;

function setup() {
  createCanvas(1600,400);
  car1=createSprite(1500, 100, 30, 30);
  car2=createSprite(1500, 200, 30, 30);
  car3=createSprite(1500, 300, 30, 30)
}

function draw() {
  background(255,255,255);  
  car1.velocityX=-10;
  car2.velocityX=-25;
  car3.velocityX=-30;
  move();
  drawSprites();
}
function move(){
  if(car1.x - car2.x - car3.x < car1.width/3 + car2.width/3 + car3.width/3 
    && car2.x - car3.x - car1.x < car1.width/3 + car2.width/3 + car3.width/3
    && car3.x - car1.x - car2.x < car1.width/3 + car2.width/3 + car3.width/3
    || car1.y - car2.y - car3.y < car1.hight/3 + car2.hight/3 + car3.hight/3
    && car2.y - car3.y - car1.y < car1.hight/3 + car2.hight/3 + car3.hight/3
    && car3.y - car1.y - car2.y < car1.hight/3 + car2.hight/3 + car3.hight/3){
      car1.velocityX=-10;
      car2.velocityX=-25;
      car3.velocityX=-30;
  }
}