class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    var options={
        bodyA: bodyA,
        bodyB: bodyB,
        length:250,
        stiffness:0,
        pointB:{x: this.offsetX, y:this.offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
}
    
display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;

    var AnchorAX = pointA.x;
    var AnchorAY = pointA.y;

    var AnchorBX = pointB.x+this.offsetX;
    var AnchorBY = pointB.y+this.offsetY;

    strokeWeight(4);
    fill("green");

    line(AnchorAX,AnchorAY,AnchorBX,AnchorBY);
    }
}