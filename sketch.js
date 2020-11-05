const Engine=Matter.Engine;
const Body=Matter.Body;
const World= Matter.World;
const Constraint=Matter.Constraint;


var engine,world



function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  polygon1 = new Polygon(330,235,30,40);
  polygon2 = new Polygon(360,235,30,40);
  polygon3 = new Polygon(390,235,30,40);
  polygon4 = new Polygon(420,235,30,40);
  polygon5 = new Polygon(450,235,30,40);
  polygon6 = new Polygon(360,195,30,40);
  polygon7 = new Polygon(390,195,30,40);
  polygon8 = new Polygon(490,195,30,40);
  polygon9 = new Polygon(390,155,30,40);
 
  ground = new Ground(400,390,800,10);

}

function draw() {
 background(0)
  Engine.update(engine);
  background(255,255,255);  
  
  polygon1.display();
  polygon2.display();
  polygon3.display();
  polygon4.display();
  polygon5.display();
  polygon6.display();
  polygon7.display();
  polygon8.display();
  polygon9.display();
  
  
  
  
  
  
  
  
  
  drawSprites();
}

function mouseDragged(){
  
  
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  
  }
  
  
  function mouseReleased(){
      slingshot.fly();
      
  }
  