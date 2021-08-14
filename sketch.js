var path,runner,coin,energyDrink,bomb;
var pathImg,runner,coinImg,energyDrinkPng,bombImg;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  engeryDrinkImg = loadImage("energyDrink.png")
  bombImg = loadImage("bomb.png");
  



}

function setup(){
  createCanvas(400,400);
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 5;
 
 
  //create sprites here
  
  //creating runner running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
coin=new Group();
energyDrinkG=new Group();
bombGroup=new Group();
}

function draw() {
  background(0)
 //codeto reset the backGround
 if(path.y>400) {
path.y=height/2;


 }
 
  }
