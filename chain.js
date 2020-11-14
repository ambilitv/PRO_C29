class Chain{
    constructor(bodyA, pointB){
        //bodyA = stone
        var options = {
            stiffness:0.04,
            length: 10,
            bodyA: bodyA,
            pointB: pointB
        }
        this.chain = Constraint.create(options)
        this.pointB = pointB
        this.bodyA = bodyA
        World.add(world, this.chain)
    }
    display(){
       if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB
        line(pointA.x, pointA.y, pointB.x, pointB.y)
       }
    }
    fly(){
        this.chain.bodyA = null
    }
    attach(abc){
       this.chain.bodyA = abc
    }
}