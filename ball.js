class ball{
 constructor(x,y,radius){
  var ball_options = {
    restitution: 1,
    frictionAir:0.01
  }
  this.ball = Bodies.circle(x,y,radius,ball_options);
  this.radius = radius;
  World.add(world,this.ball);
 }
 display(){
  push();
  ellipseMode(RADIUS);
  ellipse(this.ball.position.x,this.ball.position.y,this.radius,this.radius);

  pop();
 }
}