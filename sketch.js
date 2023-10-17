const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var radius = 40;
var ground1,lground,rground,ball
function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  
  world = engine.world;
  var ball_opt = {
    restitution:0.3,
    density:1.2
  }
  ball=Bodies.circle(260,100,radius/2, ball_opt);
  World.add(world,ball);

  ground1=new Ground(width/2,670,width,20);
  lground= new Ground(1100,600,20,120);
  rground= new Ground(1350,600,20,120);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,radius,radius);
  ground1.display()
  lground.display()
  rground.display()
  Engine.update(engine);
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
  }

}