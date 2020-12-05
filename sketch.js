
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject,groundObject,side1,dustbinImage;
var world;
 

function preload(){
	dustbinImage = loadImage("dustbingreen[1].png");
}



function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
	paperObject = new paper(200,450,40);

	groundObject = new ground(width/2,670,width,20);

	side1 = createSprite(1200,595,200,20);
	side1.shapeColor = "white";
	side1.addImage(dustbinImage);
     side1.scale = 0.4

	
	side1.depth = paperObject.depth;
	side1.depth = side1.depth+1;
	 
	
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  groundObject.display();
  side1.display();
  

 
  
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.positiom,{x:85,y:-85})
   
}

}  

