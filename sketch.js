const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  box=new Box(500,400,100,100)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  box.display()
}

