function preload() {
  cindrellaImage = loadImage ("cinderella.png")
  cinderellashoeImage = loadImage('cinderella-shoe.png')
   nightImage = loadImage('night.jpg')
   castelImage = loadImage('castel.jpg')
   witchImage = loadImage('witch2.png')
   fireImage = loadAnimation('watterball-unscreen.gif')
   witchfireballimage = loadImage('fire_ball.png')
}


function setup() {
  createCanvas(displayWidth , displayHeight);
  
 ground = createSprite(displayWidth/2,displayHeight/2)
 ground.addImage(nightImage)
 ground.velocityX=-2
 ground.scale=5
  cinderella=createSprite(150,800) 
  cinderella.addImage(cindrellaImage)
  cinderella.scale=0.4

 
  witch=createSprite(1300,100)
  witch.addImage(witchImage)
  witch.velocityY=4
  castel=createSprite(800, 200, 50, 50);
  castel.addImage(castelImage)
  castel.scale=0.3
  castel.visible=false
  cinderellashoe=createSprite(800, 200, 50, 50);
  cinderellashoe.addImage(cinderellashoeImage)
  cinderellashoe.scale=0.3
  //cinderellashoe.visible=false
  witchfireballgroup=new Group()
  life=3
gameState='play'
 
}

function draw() {
  background('black');
  if(gameState==='play'){

  if(frameCount%500===0)
  {
    castel.visible=true
  } 
  if(ground.x<200){
    ground.x=displayWidth/2
  }
  if(witch.y >displayHeight-100){
     witch.velocityY =-4
  }
if(witch.y <100){
   witch.velocityY =4
}

  if (keyDown(LEFT_ARROW))
  {
    cinderella.x = cinderella.x -10
  }
  if (keyDown(RIGHT_ARROW))
  {
    cinderella.x = cinderella.x +10
  }
  if (keyDown(UP_ARROW))
  {
    cinderella.y = cinderella.y -10
  }
  if (keyDown(DOWN_ARROW))
  {
    cinderella.y = cinderella.y +10
  }
  if (keyDown('x'))
  {
    fireball=createSprite(150,800)
    fireball.addAnimation('fire',fireImage)
    fireball.scale=0.2
    fireball.velocityX =4
  }
if (cinderella.isTouching(witchfireballgroup))

{
life=life-1
gameState='stop'
}
  }
 
  if (life===0)
  {
    cinderella.visible=false 
    witch.velocity = 0 
    witchfireballgroup.setVelocityXEach(0)
    ground.velocity=0
  }
  if (keyDown('Y') ){
    gameState='play'

  }
  if(cinderella.isTouching(castel))
  {
    cinderellashoe.x=cinderella.x
    cinderellashoe.y=cinderella.y
  }
  witchfireballFN();
  drawSprites();
  fill('white')
  textSize(30)
  text('Life : '+life,displayWidth-100 ,100)
  if (life===0)
  {
    gameState='end'
    fill('white')
  textSize(50)
  text("Game Over" , displayWidth/2 ,displayHeight/2)
  }
  if (gameState==='stop')
  {
    fill('white')
  textSize(30)
  text("pres Y to continune the game " , displayWidth/2 ,displayHeight/2)
  }
}
function witchfireballFN()
{
  if (frameCount%100===0){
  witchfireball = createSprite(witch.x,witch.y)
  witchfireball.addImage(witchfireballimage)
  witchfireball.scale=0.2
  witchfireball.velocityX=-8
  witchfireballgroup.add(witchfireball)
  }
}
