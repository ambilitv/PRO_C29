class Stone{
    constructor(){
        var qualities = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.bodies = Bodies.rectangle(90, 550, 20, 20, qualities)
        this.image = loadImage("stone.png")
        World.add(world, this.bodies)
    }
    display(){
        imageMode(CENTER)
        var pos = this.bodies.position
        image(this.image,pos.x, pos.y, 60, 60)
    }
}