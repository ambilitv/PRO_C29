class Ground{
    constructor(){
        var qualities = {
            isStatic: true
        }
        this.bodies = Bodies.rectangle(width/2, 695, width, 20, qualities)
        World.add(world, this.bodies)
    }
    display(){
        rectMode(CENTER)
        fill("brown")
        var pos = this.bodies.position
        rect(pos.x, pos.y, width, 10)
    }
}