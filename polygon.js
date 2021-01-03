class Polygon{
   
  constructor(x, y, width, height,angle) {
    var options = {
      isStatic:false, 
      'restitution':1.2,
            'friction':1.0,
            'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
   this.image=loadImage("polygon.png")
    World.add(world, this.body);
  }
  display(){
    
    push()
    
   rotate(this.body.angle)
   imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);
    pop()
  }

    }





   















    
