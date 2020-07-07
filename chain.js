class Chain {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var posb=this.chain.bodyA.position;
        var posl=this.chain.bodyB.position;
        strokeWeight(5);
        line(posb.x,posb.y,posl.x,posl.y);
    }
    
}