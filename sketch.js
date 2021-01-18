const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImage;
var voldemortImage, voldemort;
var dementorImage, dementor;
var harry;

function preload(){
  backgroundImage = loadImage('images/Castle.png');
  voldemortImage = loadImage('images/Voldemort2.png');
  dementorImage = loadImage('images/Dementor.gif');
}

function setup() {
  createCanvas(1350,650);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

  voldemort = createSprite(50,315,10,10);
  voldemort.addImage(voldemortImage);
  voldemort.scale = 0.6;

  harry = new Harry(450,325,300,150);

  //dementor = createSprite();
  //dementor.addImage(dementorImage);
  //dementor.scale = 0.5;
}

function draw() {
  Engine.update(engine); 

  rectMode(CENTER);
  background(backgroundImage);
  
  harry.display();
  drawSprites(); 
}