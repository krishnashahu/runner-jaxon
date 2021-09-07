var RunnerImg,Runner;
var pathImg,path;



function preload(){
  
pathImg =loadImage("path.png")
RunnerImg=loadImage("Runner-1.png","Runner-2.png")
loadAnimation("Runner-1png","Runner-2png");

function setup(){
  createCanvas(400,400);
 path=createSprite(200,200);
 path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;

Runner=createSprite(180,340,50,170);
Runner.addImage(RunnerImg);


//code to reset the background
if (path.y > 400){
  path.y = height/2;
}




}
}

function draw()  {
  background
  drawSprites();
}
