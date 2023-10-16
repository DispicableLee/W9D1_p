class MovingObject{
    constructor(optionsObj){
        this.pos = optionsObj.pos
        this.vel = optionsObj.vel
        this.radius = optionsObj.radius
        this.color = optionsObj.color
        console.log("constructed moving object")
    }

    move(){
        this.pos[0] += this.vel[0]
        this.pos[1] += this.vel[1]
        // debugger
    }

    
    draw(ctx){
        let x = this.pos[0]
        let y = this.pos[1]

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