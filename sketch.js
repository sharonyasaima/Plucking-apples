
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var launchforce=100;
var bg;
var ground;
function preload()
{
	bg=loadImage("background.png");
}

function setup() {
	createCanvas(1200, 600);

	 ground=createSprite(50,580,2500,20)
	 ground.visible=false;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   tree= new Tree(950,300,340,450)
   apple1=new Apple(900,200,60,60)
   apple2=new Apple(920,240,60,60)
   apple3=new Apple(840,210,60,60)
   apple4=new Apple(1000,250,60,60)
   apple5=new Apple(1050,190,60,60)
   apple6=new Apple(980,160,60,60)
   apple7=new Apple(1090,280,60,60)
   apple8=new Apple(850,280,60,60)
   apple9=new Apple(910,130,60,60)

   stone1= new Stone(220,400,100);
   boy=new Boy(150,430,120,220)
   cons=new Cons(stone1.body,{x:200, y:380})
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  
  
  tree.display();
  boy.display();
  cons.display();
  stone1.display()
  apple1.display()
  apple2.display()
  apple3.display()
  apple4.display()
  apple5.display()
  apple6.display()
  apple7.display()
  apple8.display()
  apple9.display()
  detach(stone1,apple1);
  detach(stone1,apple2);
  detach(stone1,apple4);
  detach(stone1,apple3);
  detach(stone1,apple5);
  detach(stone1,apple6);
  detach(stone1,apple7);
  detach(stone1,apple8);
  detach(stone1,apple9);





  drawSprites();
 
}
function mouseDragged(){
  
      Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  cons.fly();
 // Matter.Body.applyForce(stone1.body,{x:950,y:300},-100);
 
}

function keyPressed(){
  if(keyCode === 32){
   Matter.Body.setPosition(stone1.body,{x: 220, y:400});
      cons.attach(stone1.body);
  }
}
 
function detach (stone,apple){

stonebodyposition=stone1.body.position;
applebodyposition=apple1.body.position;
var distance = dist(stonebodyposition.x,stonebodyposition.y,applebodyposition.x,stonebodyposition.y);
if(distance<= apple.r+stone.r)
 { //console.log(distance);
  Matter.Body.setStatic(apple.body,false); 
}

 }







