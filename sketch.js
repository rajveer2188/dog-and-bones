var bg
var bg_image
var dog,dog_l,right
var bone,bone_image
function preload() {

bg_image = loadImage("Grassland.png")
dog_l = loadImage("left face dog.png")
right = loadImage("Dog.png")
bone_image = loadImage("bone.png")

}


function setup()
{ 
  createCanvas(400,400)
  
bg = createSprite(200,200,400,400)
bg.addImage("greenland",bg_image)

dog = createSprite(200,300,30,40)
dog.scale = 0.2
dog.addImage("dog_l",dog_l)

bone = createSprite(20,300,30,40)
bone.scale = 0.4
bone.addImage(bone_image)
}




function draw()

{


  
if(keyDown("A"))  
{
   dog.x = dog.x -1
   dog.addImage("dog_l",dog_l)


}

if(keyDown("S"))  
{
   dog.x = dog.x +1
   dog.addImage("dog_l",right)
  
}

if(dog.isTouching(bone))
{
  bone.x = dog.x +10

}





drawSprites()

}


