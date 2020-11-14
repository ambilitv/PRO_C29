
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var floor
var tree
var stone
var boy
var mango0,mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;
function preload()
{
	boyImg= loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 700);
	boy= createSprite(150, 620, 50, 40)
	boy.addImage(boyImg)
	boy.scale = 0.13

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	floor = new Ground()
	
	tree = new Tree()
	mango0 = new Mango(830, 370)
	mango1 = new Mango(860, 440)
	mango2 = new Mango(1070, 400)
	mango3 = new Mango(880, 340)
	mango4 = new Mango(960, 390)
	mango5 = new Mango(1050, 290)
	mango6 = new Mango(890, 400)
	mango7 = new Mango(1000, 340)
	mango8 = new Mango(1060, 360)
	mango9 = new Mango(960, 240)
	mango10 = new Mango(900, 280)
	mango11 = new Mango(950, 330)
	//boy = new Boy()
	stone = new Stone()
	thread = new Chain(stone.bodies, {x:90, y:550})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(50, 190, 250));
  floor.display()
  tree.display()
  
  //boy.display()
  stone.display()
  mango0.display() 
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  thread.display()
 detectCollision(stone, mango0) 
 detectCollision(stone, mango1)
 detectCollision(stone, mango2) 
 detectCollision(stone, mango3)
 detectCollision(stone, mango4) 
 detectCollision(stone, mango5)
 detectCollision(stone, mango6) 
 detectCollision(stone, mango7)
 detectCollision(stone, mango8) 
 detectCollision(stone, mango9)
 detectCollision(stone, mango10)
 detectCollision(stone, mango11)
 /*detectCollision(stone.bodies.position, mango2.bodies.position)
 detectCollision(stone.bodies.position, mango3.bodies.position)
 detectCollision(stone.bodies.position, mango4.bodies.position)
 detectCollision(stone.bodies.position, mango5.bodies.position)
 detectCollision(stone.bodies.position, mango6.bodies.position)
 detectCollision(stone.bodies.position, mango7.bodies.position)
 detectCollision(stone.bodies.position, mango8.bodies.position)
 detectCollision(stone.bodies.position, mango9.bodies.position)
 detectCollision(stone.bodies.position, mango10.bodies.position)
 detectCollision(stone.bodies.position, mango11.bodies.position)*/
  drawSprites();
  textSize(30)
  text("PRESS SPACE TO MAKE THE MANGO COME BACK", 50, 50)
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.bodies, {x: mouseX, y: mouseY})
}
function mouseReleased(){
	thread.fly()
}
function keyPressed(){
	if(keyCode === 32){
		launcher = {x:90, y:550}
		Matter.Body.setPosition(stone.bodies, {x:90, y:550})
		thread.attach(stone.bodies)

	}
}