var  wall, thickness;  
var speed, weight, bullet;
function setup() 
{
  createCanvas(800,400);
  speed = random(223,321);
  weight1 = random(30,52);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 25, 5);
  wall = createSprite(750, 200, thickness, height/2);
 
}

function draw() 
{
  
  
  background(255,255,255); 
  bullet.velocityX = speed; 
  bullet.weight = weight1;

  
if(hasCollided(bullet, wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);

  if(damage > 10)
  {
   wall.shapeColor =  "#00FF00"
  }

  if(damage < 10)
  {
    wall.shapeColor = "#FF0000";
  }
  
}
 drawSprites();
}
function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
{
  return true
}
  return false;
}
