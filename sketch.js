   var iss,hasDocked,ship,issImage;
  var shipImage1,shipImage2,shipImage3,shipImage4;
  hasDocked=false;
var backgroundImage;


function preload(){
issImage=loadImage("iss.png")
shipImage1=loadImage("spacecraft1.png")
shipImage2=loadImage("spacecraft2.png")
shipImage3=loadImage("spacecraft3.png")
shipImage4=loadImage("spacecraft4.png")
backgroundImage=loadImage("spacebg.jpg")

}



function setup() {


  createCanvas(displayWidth-300,displayHeight-100);
  
  iss=createSprite(330, 250, 50, 50);
  iss.addImage(issImage)

  ship=createSprite(600,600,50,50)
  ship.addImage(shipImage1)
  ship.scale=0.21
 
}

function draw() {
  background(backgroundImage);  
 console.log(ship.x,ship.y)
if(keyDown(RIGHT_ARROW)){

ship.x=ship.x+5
ship.addImage(shipImage4)
}
else if(keyDown(LEFT_ARROW)){

  ship.x=ship.x-5
  ship.addImage(shipImage3)
  }

 else if(keyDown(DOWN_ARROW)){

    ship.y=ship.y+5
    ship.addImage(shipImage2)
    }

 else   if(keyDown(UP_ARROW)){

      ship.y=ship.y-5
      ship.addImage(shipImage2)
      }
  else{
    ship.addImage(shipImage1)
  }
 if(ship.x===265& ship.y=== 305)   {
   hasDocked=true;
 }  
 if(hasDocked===true){
fill("white")
textSize(25)
  text("Wrong station! This is the EYEss, not the Iss! Scram!",400,600)
  ship.x=600
  ship.y=350
}
  drawSprites();
}