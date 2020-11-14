class Mango{
    constructor(x, y){
        var qualities = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.bodies = Bodies.circle(x, y, 20, qualities)
        this.image = loadImage("mango.png")
        World.add(world, this.bodies)
    }
    display(){
        imageMode(CENTER)
        var pos = this.bodies.position
        image(this.image,pos.x, pos.y, 50, 50)
    }
}