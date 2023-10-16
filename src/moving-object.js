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
        let x = this.pos[0]
        let y = this.pos[1]
        debugger

        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
    }

    isCollideWith(otherMovingObj){

    }
}

export default MovingObject;