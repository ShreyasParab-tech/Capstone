function preload(){
  audio = loadSound("corona.mp3")
  img = loadImage("corona.png")
  p = loadImage("persons.png")
  go = loadImage("go.jpg")
  
}

function setup() {
  createCanvas(800,800);

 
  corona = createSprite(90,300,40,40) 
  corona.addImage(img)
  corona.scale = 0.1

 p1 = createSprite(90,400,40,40)
p1.addImage(p)
p1.scale = 0.1

 p2 = createSprite(190,400,40,40)
 p2.addImage(p)
 p2.scale = 0.1

 p3 = createSprite(290,350,40,40)
 p3.addImage(p)
 p3.scale = 0.1

 p4 = createSprite(290,450,40,40)
 p4.addImage(p)
 p4.scale = 0.1

 p5 = createSprite(390,300,40,40)
 p5.addImage(p)
 p5.scale = 0.1
 
 p6 = createSprite(390,400,40,40)
 p6.addImage(p)
 p6.scale = 0.1

 p7 = createSprite(390,500,40,40)
p7.addImage(p)
p7.scale = 0.1

 p8 = createSprite(500,250,40,40)
 p8.addImage(p)
 p8.scale = 0.1

 p9 = createSprite(500,350,40,40)
 p9.addImage(p)
 p9.scale = 0.1

 p10 = createSprite(500,450,40,40)
p10.addImage(p)
p10.scale = 0.1

 p11 = createSprite(500,550,40,40)
 p11.addImage(p)
 p11.scale = 0.1

 p12 = createSprite(610,200,40,40)
 p12.addImage(p)
 p12.scale = 0.1

 p13 = createSprite(610,300,40,40)
p13.addImage(p)
p13.scale = 0.1

 p14 = createSprite(610,400,40,40)
 p14.addImage(p)
 p14.scale = 0.1

 p15 = createSprite(610,500,40,40)
p15.addImage(p)
p15.scale = 0.1

 p16 = createSprite(610,600,40,40)
 p16.addImage(p)
 p16.scale = 0.1



 c1 = createSprite(225,350,20,20)
 c1.visible = false
 c1.addImage(img)
  c1.scale = 0.1
 c2 = createSprite(225,450,20,20)
 c2.visible = false
 c2.addImage(img)
  c2.scale = 0.1
 c3 = createSprite(320,320,20,20)
 c3.visible = false
 c3.addImage(img)
  c3.scale = 0.1
 c4 = createSprite(320,400,20,20)
 c4.visible = false
 c4.addImage(img)
  c4.scale = 0.1
 c5 = createSprite(320,480,20,20)
 c5.visible = false
 c5.addImage(img)
  c5.scale = 0.1
 c6 = createSprite(440,250,20,20)
 c6.visible = false
 c6.addImage(img)
  c6.scale = 0.1

 c7 = createSprite(440,350,20,20)
 c7.visible = false
 c7.addImage(img)
  c7.scale = 0.1

 c8 = createSprite(440,455,20,20)
 c8.visible = false
 c8.addImage(img)
  c8.scale = 0.1
 c9 = createSprite(440,525,20,20)
  c9.visible = false
  c9.addImage(img)
  c9.scale = 0.1
  c10 = createSprite(525,200,20,20)
  c10.visible = false
  c10.addImage(img)
  c10.scale = 0.1
  c11 = createSprite(525,300,20,20)
  c11.visible = false
  c11.addImage(img)
  c11.scale = 0.1
  c12 = createSprite(525,400,20,20)
  c12.visible = false
  c12.addImage(img)
  c12.scale = 0.1
  c13 = createSprite(525,500,20,20)
  c13.visible = false
  c13.addImage(img)
 c13.scale = 0.1
  c14 = createSprite(525,600,20,20)
  c14.visible = false
  c14.addImage(img)
  c14.scale = 0.1

 




 

 

}

function draw() {
  background("white");  
  corona.velocityY = 1
  
  fill("red")
  textSize(30)
  text("This is how this virus has affected almost half of the world", 30,100)
  
edges = createEdgeSprites()


if(corona.isTouching(p1)){
  corona.destroy()
  p1.velocityX = 1
}
if(p1.isTouching(p2)){
  p1.destroy()
   p2.velocityX = 1
   p2.destroy()
c1.visible = true 
  c1.velocityX = 1
  c2.visible = true 
  c2.velocityX = 1
 
}
if(c1.isTouching(p3)){
  p3.destroy()
  p4.destroy()
  c1.destroy()
  c2.destroy()
  c3.visible = true
  c3.velocityX = 1
 c3.velocityY =-1
 c4.visible = true
 c4.velocityX = 1
 c5.velocityX = 1
 c5.velocityY =1
 c5.visible = true
}
if(c2.isTouching(p4)){
  p4.destroy()
}
 if(c3.isTouching(p5)){
  p5.destroy()
  c3.destroy()
}
if(c4.isTouching(p6)){
  p6.destroy()
  c4.destroy()
}
if(c5.isTouching(p7)){
  p7.destroy()
  c5.destroy()
  c6.visible = true
  c6.velocityX = 1

  c7.visible = true
  c7.velocityX = 1


  c8.visible = true
  c8.velocityX = 1

  c9.visible = true
  c9.velocityX = 1
  
}

if(c6.isTouching(p8)){
  p8.destroy()
  c6.destroy()
}
if(c7.isTouching(p9)){
  p9.destroy()
  c7.destroy()
}
if(c8.isTouching(p10)){
  p10.destroy()
  c8.destroy()
}
if(c9.isTouching(p11)){
  p11.destroy()
  c9.destroy()

  c10.velocityX =1
  c10.visible = true
  c11.velocityX =1
  c11.visible = true
  c12.velocityX =1
  c12.visible = true
  c13.velocityX =1
  c13.visible = true
  c14.velocityX =1
  c14.visible = true

}

if(c10.isTouching(p12)){
  c10.destroy()
  p12.destroy()
}
if(c11.isTouching(p13)){
  c11.destroy()
  p13.destroy()
}
if(c12.isTouching(p14)){
  c12.destroy()
  p14.destroy()
}
if(c13.isTouching(p15)){
  c13.destroy()
  p15.destroy()
}
if(c14.isTouching(p16)){
  
  
  c14.destroy()
  p16.destroy()
audio.play()

  
}
corona.collide(p1)
fill("green")
text("So, Stay Safe, Stay at home!! for you, for us, for India !!",30,700)



  drawSprites();
}