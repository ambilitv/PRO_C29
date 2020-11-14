function detectCollision(a, b){
    abp = a.bodies.position
    bbp = b.bodies.position
    if(abp.x - bbp.x <= (20) && bbp.x - abp.x <= (20) &&
    abp.y - bbp.y <= (20)&& bbp.y - abp.y <= 20){
        Matter.Body.setStatic(b.bodies, false)
        console.log(12)
    }
    //console.log(10)
    
}
/*function detectCollision( b){
    if(stoneobject.x - b.x < (stoneobject.width/2 + b.width/2) && b.x - stoneobject.x < (stoneobject.width/2 + b.width/2) 
    && stoneobject.y - b.y < (stoneobject.height/ 2 + b.height / 2)&& b.y - stoneobject.y <((stoneobject.height/ 2 + b.height / 2))){
        Matter.Body.setStatic(b, {isStatic: false})
    }
    
}*/
