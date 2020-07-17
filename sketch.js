const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin;
var ground;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  
  dustbin=new Dustbin(590,670,250,30);
  dustbin1=new Dustbin(450,610,30,150);
  dustbin2=new Dustbin(730.5,610,30,150);
  
  
paper = new Paper(100,600,50,50);

   ground = new Ground(400,700,800,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  
  
  dustbin.display();
  dustbin1.display();
  
  dustbin2.display();
  paper.display();
 
}
function keyPressed() {
  if( keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
  }
}



