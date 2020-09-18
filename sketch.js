var fixedrect,movingrect
function setup() {
  fixedrect=createSprite(200,200,90,90);
  movingrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2){
    fixedrect.shapeColor="green"
  movingrect.shapeColor="blue"
  }
  else{
    fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
  }
  drawSprites();
}