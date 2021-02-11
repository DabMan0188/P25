var paperObject;
var d1, d2, d3;
var groundObject;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700, 25, 25);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperObject = new Paper(50,10,30);
	groundObject = new Ground(400,675,800,10);

	d1 = new Dustbin(500,620,100, 20);
	d2 = new Dustbin(700,620,100, 20);
	d3 = new Dustbin(600,660,20, 180);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  d1.display();
  d2.display();
  d3.display();
  groundObject.display();
}

function keyPressed() 
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:20, y: -20});
	}
}


