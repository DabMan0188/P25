class Dustbin 
{
    constructor(x,y,height, width, angle)
    {
        var options={
            isStatic: true,
            'restitution':1.6,
            'friction':3.0,
            'density':2.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          Matter.Body.setAngle(this.body,angle);
          this.image = loadImage("dustbingreen.png"); 
          World.add(world,this.body);
          
}
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
            }
}