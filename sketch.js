var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	var boxPosition = width/2 - 100;

	rect1 = createSprite(boxPosition,610,20,100);
	rect1.shapeColor = color("red");

	
	rect2 = createSprite(boxPosition+200,610,20,100);
	rect2.shapeColor = color("red");

	
	rect3 = createSprite(boxPosition+100,660,200,20);
	rect3.shapeColor = color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 
	 
	 boxLeftBody = Bodies.rectangle(boxPosition+20, 610,20,100,{isStatic:true});
	 World.add(world,boxLeftBody);
	 
	 boxRightBody = Bodies.rectangle(boxPosition+180 , 610, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);
	 

	 boxBottomBody = Bodies.rectangle(boxPosition+100, 640, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	
	//ellipse(packageBody.position.x,packageBody.position.y,20,20);
  }
}



