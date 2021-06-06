var fixedRECT;
var movingRECT;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixedRECT=createSprite(400, 200, 50, 100);


  movingRECT=createSprite(400, 200, 100, 50);

  movingRECT.debug = "true"
  fixedRECT.debug = "true"
}

function draw() {
  background(255,255,255); 
  
  movingRECT.x = World.mouseX;
  movingRECT.y = World.mouseY;

  if (isTouching(fixedRECT,movingRECT)){
fixedRECT.shapeColor = "blue";
movingRECT.shapeColor = "red";
  }

  else{
    fixedRECT.shapeColor = "green";
    movingRECT.shapeColor = "pink";

  }

  drawSprites();
}

