var movingRect, fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "blue";

  fixedRect = createSprite(200,200,30,70);
  fixedRect.shapeColor = "blue";

}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
     fixedRect.y - movingRect.y <= fixedRect.height/2  + movingRect.height/2 &&
     movingRect.x - fixedRect.x <= movingRect.width/2  + fixedRect.width/2 &&
     fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  drawSprites();
}