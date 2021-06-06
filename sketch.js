const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,550,70,70);
    box2 = new Box(700,550,70,70);
    box3 = new Box(800,550,70,70);
    box4 = new Box(700,550,70,70);
    box5 = new Box(800,550,70,70);
    box6 = new Box(700,550,70,70);
    box7 = new Box(800,550,70,70);
    box8 = new Box(700,550,70,70);
    
    box10 = new Box(800,550,70,70);
    box11 = new Box(700,550,70,70);
    box12 = new Box(800,550,70,70);
    box13 = new Box(700,550,70,70);

    ground = new Ground(500,height,1000,20)
    ball= new Ball(200,200,130,130)
    hang=new Rope(ball.body,{x:400,y:50})
    
}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})



}

function draw(){
    background("blue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
  
    box10.display();
    box11.display();
    box12.display();
    box13.display();


    ground.display();
    ball.display();
    hang.display();
}