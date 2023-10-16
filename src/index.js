document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById('game-canvas')
    canvas.width = 800;
    canvas.height = 500;
    console.log("Webpack is working!");

    let ctx = canvas.getContext('2d');

    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });
    
    mo.draw(ctx);
})




import MovingObject from "./moving-object.js"

window.MovingObject = MovingObject;