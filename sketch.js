const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var background , blue , green , grey , orange ; 

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    loadImage("images/background.png") ; 
    loadImage("images/bluecar.png") ; 
    loadImage("images/greencar.png") ; 
    loadImage("images/greycar.png") ; 
    loadImage("images/orangecar.png") ; 
    loadImage("images/sling1.png") ; 
    loadImage("images/sling2.png") ; 
    loadImage("images/track.jpg") ; 
}


function setup(){
    var canvas = createCanvas(1200,900) ;
    engine = Engine.create() ; 
    world = engine.world ; 

     var track = createSprite() ;
   

}

function draw(){
    Engine.update(engine) ; 

    car = new Car (200,50) ;
    Slingshot = new SlingShot(car.body,{x:200, y:50});
}

function mouseDragged(){    
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    Slingshot.fly();
}