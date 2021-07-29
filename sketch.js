var iss, spacecraft
var hasdocked = false

function preload() {
  bg= loadImage("spacebg.jpg")
  sp1img = loadImage("spacecraft1.png")
  sp2img = loadImage("spacecraft2.png")
  sp3img = loadImage("spacecraft3.png")
  sp4img = loadImage("spacecraft4.png")
  issimg = loadImage("iss.png")
}


function setup() {
  createCanvas(800,400);
  iss= createSprite(330,130)
  iss.addImage(issimg)
  iss.scale = 0.25;

  sp1 = createSprite(285,240)
  sp1.addImage(sp1img)
  sp1.scale = 0.15;
}

function draw() {
  background(bg);
  if(!hasdocked){
    sp1.x = sp1.x+random(-1,1)
    if (keyDown("UP_ARROW")){
      sp1.y = sp1.y-2
    }
    if (keyDown("DOWN_ARROW")){
     sp1.addImage(sp2img)
    }
    if (keyDown("RIGHT_ARROW")){
      sp1.addImage(sp3img)
      sp1.x = sp1.x+2
    }
    if (keyDown("LEFT_ARROW")){
      sp1.addImage(sp4img)
      sp1.x = sp1.x-2
    }
  }
    if(sp1.y<=(iss.y+70)&& sp1.x<=(iss.x-10)){
       hasdocked = true
       fill("yellow")
       textSize(25)
       text("docking successful", 200, 300)
       
    }
  drawSprites();
}