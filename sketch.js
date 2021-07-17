var bg,enemy1Group;
var player1
var score=0
function preload (){
  bg= loadAnimation("bg/War.png");
  enemy= loadAnimation("attack1.png","attack2.png","attack3.png","attack4.png","attack5.png","attack6.png","attack7.png","attack8.png","attack9.png","attack10.png","attack11.png","attack12.png",)
  player=loadAnimation("warrior1.png","warrior2.png","warrior3.png",)//warrior4.png,warrior5.png,warrior6.png,warrior7.png,warrior8.png,warrior9.png,warrior10.png,warrior11.png,warrior12.png,warrior13.png,warrior14.png,warrior15.png,warrior16.png")
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  //createSprite(400, 200, 50, 50);

 
  

  player1=createSprite(200,200,50,50)
  player1.addAnimation("play",player)
  player1.scale=0.25


  enemy1Group=createGroup()
  player1.debug=true
  player1.setCollider("rectangle",0,0,300,300)
}
function draw() {
  background(bg); 
  spawnenemy() 
  //code for moving player
  //code for istouching
  if(player1.isTouching(enemy1Group)){
    enemy1Group.destroyEach();
    score=score+1;
  }
  player1.y = World.mouseY
  drawSprites();
textSize(30)
fill("yellow")
text("enemykill "+score,100,100)

}
function spawnenemy() {
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
     enemy1 = createSprite(displayWidth,120,40,10);
    enemy1.y = Math.round(random(100,displayHeight-200));
    enemy1.addAnimation("enmy",enemy)
  enemy1.scale=0.2
   
    enemy1.velocityX = -10;
    
     //assign lifetime to the variable
    enemy1.lifetime = 600;
    
  enemy1.debug = true
    enemy1.setCollider("rectangle",0,0,300,300)
    //add each cloud to the group
  enemy1Group.add(enemy1);
  }
}