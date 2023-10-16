class MovingObject{
    constructor(optionsObj){
        this.pos = optionsObj.pos
        this.vel = optionsObj.vel
        this.radius = optionsObj.radius
        this.color = optionsObj.color
        console.log("constructed moving object")
    }
    

    move(){

    }

    draw(ctx){

    }

    isCollideWith(otherMovingObj){

    }
}

export default MovingObject