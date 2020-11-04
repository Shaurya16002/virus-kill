const Engine =  Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bottle,ground,randomNo,virusImage,groundImage,man,manImg,iground,bgImg;
var sling,engine,world;



function preload(){
virusImage = loadImage("images/temp.png");
groundImage = loadImage("images/ground.png");
manImg = loadImage("images/man.png");
bgImg = loadImage("images/bg.png");

}

function setup() {
  createCanvas(800,400);
  
engine = Engine.create();
world = engine.world;


ground = createSprite(100,250,30,10);
ground.addImage(groundImage);
ground.scale = 0.19;

//man = createSprite(75,230,30,10);
//man.addImage(manImg);
//man.scale = 0.06;

man = Bodies.rectangle(75,230,30,10)
World.add(world,man)
//iground = createSprite(100,240,100,10);

sling = new slingshot(man.body,{x:100,y:230});
}

function draw() {
 background(bgImg)


 Engine.update(engine);

 imageMode(CENTER)
 image(manImg,man.body.position.x,man.body.position.y,50,50)
 //man.velocityY = 9;
// man.collide(iground)
 
//iground.visible = false;

 if(keyDown(UP_ARROW)){

   ground.y = ground.y-5;   

 }

 if(keyDown(DOWN_ARROW)){

  ground.y = ground.y+5;   

}

if(keyDown(UP_ARROW)){

  iground.y = iground.y-5;   

}

if(keyDown(DOWN_ARROW)){

 iground.y = iground.y+5;   

}
spawnVirus();

sling.display();

  drawSprites();

}

function spawnVirus(){

  

if(frameCount%60===0){

  randomNo = Math.round(random(100,350));
  var virus = createSprite(800,randomNo,10,10);
  virus.addImage(virusImage)
  virus.scale= 0.09

  virus.velocityX = -3;
  virus.shapeColor="white";
  virus.lifetime = 300;

   

}

}


