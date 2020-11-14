class Boy{
    constructor(){
        var qualities = {
            isStatic: true
        }
        this.bodies = Bodies.rectangle(150, 620, 50, 40, qualities)
        this.image = loadImage("boy.png")
        World.add(world, this.bodies)
    }
    display(){
        imageMode(CENTER)
        var pos = this.bodies.position
        image(this.image,pos.x, pos.y, 250, 250)
    }
}