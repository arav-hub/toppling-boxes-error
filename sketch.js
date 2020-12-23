const Engine = Matter.Engine
const Body = Matter.Body
const Bodies  = Matter.Bodies
const World = Matter.World
var engine,world
var box1,box2,ground

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(400,380,800,20)
  box1 = new Box(400,10,50,50)
  box2 = new Box(400,50,50,50)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground.display()
  box1.display()
  box2.display()
}