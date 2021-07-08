var runner, runner_running;
var track, trackImage;
var invisSpriteL, invisSpriteR;

function preload(){
  //pre-load images
  trackImage = loadImage("path.png")
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(300,1000);
  //create sprites here
  track = createSprite(150,150,1000,5)
  track.addImage("track", trackImage)
  runner = createSprite(200,200,20,20)
  runner.addAnimation("runnerrunning", runner_running)
  runner.scale = 0.1
  invisSpriteL = createSprite(0,500,5,1000)
  invisSpriteL.visible = false
  invisSpriteR = createSprite(400,500,5,1000)
  invisSpriteR.visible = false
  runner.collide(invisSpriteL);
  runner.collide(invisSpriteR);

}

function draw() {
  // set background
  background(0);
  
  //player can control the runner
  runner.x = World.mouseX
  
  
  //make the track move infinitely
  track.velocityY = 2
  console.log(track.y)
  if(track.y > 300){
    track.y = 0
  }
  
  drawSprites()
}
