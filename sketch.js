const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld, ground, box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;
var backgroundImage;
var platform1;
var gameState = "onSling";
//var constrainedLog ;
var slingShot;

function preload() {
  backgroundImage = loadImage("Images/bg.png");
}

function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  
  // creating all the variables 
  ground = new Ground (600,height,width,20);
  platform1 = new Ground (150,305,300,170);
  box1 = new Box (700,320,70,70);
  box2 = new Box (920,320,70,70);
  pig1 = new Pig (810,350);
  log1 = new Log (810,260,300,PI/2);
  box3 = new Box (700,240,70,70);
  box4 = new Box (920,240,70,70);
  pig2 = new Pig (810,220);
  log2 = new Log (810,180,300,PI/2);
  log3 = new Log (760,120,150,PI/7);
  log4 = new Log (870,120,150,-PI/7);
  box5 = new Box(810,160,70,70);
  bird = new Bird (100,50);
  //constrainedLog = new Log (230,180,80,PI/2);
  slingShot = new SlingShot(bird.body,{x:200, y:50});


}

function draw() {
  background(backgroundImage); 
  Engine.update (myEngine); 
  
  //displaying all the sprites
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
  ground.display();
  platform1.display();
  //constrainedLog.display();
  slingShot.display();
}

function mouseDragged(){
  if (gameState == "onSling"){
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
  }
}

function mouseReleased(){

  slingShot.release();
  gameState = "launched";

}

function keyPressed (){

  if(keyCode === 32){

    slingShot.attach(bird.body);
    gameState = "onSling";
  }


}
