//namespace

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world

function setup() {
    createCanvas(400,400);
   engine=Engine.create();
   world=engine.world;
   
   box_options={
       restitution:1
   }

   box=Bodies.rectangle(100,100,20,40,box_options);
   World.add(world,box)


}


function draw() 
{
    background("black")
  Engine.update(engine)

  rectMode(CENTER);
  rect(box.position.x,box.position.y,20,40);

}

