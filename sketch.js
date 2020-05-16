const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var raindrops = []
var raindrop,x,y;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

//for(i = 0; i < i+1; i++){
  x = Math.random(5,795);
  y = 0

  raindrop = new baseClass(x,y,10);

  raindrops.push(raindrop)
//}






}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  //for(var i=0; i<raindrops.length; i++){

    x = Math.random(5,795);
    y = 0
  
    raindrop = new baseClass(x,y,10);
  
    raindrops.push(raindrop)


 // }



  drawSprites();
}