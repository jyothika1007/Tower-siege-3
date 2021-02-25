const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygon_img;
var score = 0;

function preload(){
    polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,450,1200,15);
    platform = new Ground(390, 300, 260, 10);

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40)
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40);

    polygon = Bodies.circle(30,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    textSize(35)
    fill("white")
    text("SCORE : " + score, 750, 40)
    
    ground.display();
    fill("lightblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("pink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("lightgreen");
    box13.display();
    box14.display();
    box15.display();
    fill("grey");
    box16.display();

    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    
    platform.display();
   slingshot.display();

   box1.score();
   box2.score();
   box3.score();
   box4.score();
   box5.score();
   box6.score();
   box7.score();
   box8.score();
   box9.score();
   box10.score();
   box11.score();
   box12.score();
   box13.score();
   box14.score();
   box15.score();
}
function mouseDragged(){

    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});   
    }

    function mouseReleased(){
    
        slingshot.fly();
    }
    
    function keyPressed(){
        if(keyCode === 32){
           slingshot.attach(this.polygon);
        }
    }
    