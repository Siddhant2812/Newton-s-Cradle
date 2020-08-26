
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,ground;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  bob1 = new Paper(400,550,20);
  bob2 = new Paper(420,550,20);
  bob3 = new Paper(440,550,20);
  bob4 = new Paper(380,550,20);
  bob5 = new Paper(360,550,20);

  ground = new Ground(400,350,150,10);

  chain1 = new Chain(bob1.body,ground.body,0,-5);
  chain2 = new Chain(bob2.body,ground.body,20,-5);
  chain3 = new Chain(bob3.body,ground.body,40,-5);
  chain4 = new Chain(bob4.body,ground.body,-20,-5);
  chain5 = new Chain(bob5.body,ground.body,-40,-5);

	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(255);

  keyPress(-100,-20);

  Engine.update(engine);
 
  ground.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites(); 
}

function keyPress(pos1,pos2){
  if(keyDown("T")){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:pos1,y:pos2});
  }
}



