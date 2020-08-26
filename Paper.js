/*class Paper {
  constructor(x,y,diameter) {
    var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(x,y,diameter,options);
    this.diameter = diameter;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    fill("purple");
    circle(0,0,this.diameter);
    pop();
  }
}*/
/*class Paper {
  constructor(x,y,diameter) {
    var options = {
        'isStatic':false
    }
    this.diameter = diameter;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(this.x,this.y,this.diameter,options);
    World.add(world, this.body);
  }
  
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill("purple");
    circle(0,0,this.diameter);
    pop();
  }
}*/

class Paper {
  constructor(x, y,diameter) {
    var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':1.5,
        'isStatic': false
    }
    this.diameter = diameter;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x,y,diameter,options);
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;

    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    circle(0, 0, this.diameter);
    pop();
  }
};