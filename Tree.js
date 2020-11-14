class Tree{
    constructor(){
        var qualities = {
            isStatic: true
        }
        this.bodies = Bodies.rectangle(940, 460, 100, 400, qualities)
        this.image = loadImage("tree.png")
        World.add(world, this.bodies)
    }
    display(){
        imageMode(CENTER)
        var pos = this.bodies.position
        image(this.image,pos.x, pos.y, 400, 500)
    }
}