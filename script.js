let cvx = document.getElementById("canva");
let canvas = cvx.getContext("2d");
let groundImg, foodImg;
groundImg = new Image();
foodImg = new Image();
groundImg.src = "ground.png";
foodImg.src = "food.png";

let food = {
    x: Math.round(Math.random()*17)*32,
    y: Math.round(Math.random()*17)*32
}

let snake = [];
snake[0] = {
    x: 32*5,
    y: 32*10
}
// snake[1] = {
//     x: 32*7,
//     y: 32*12
// }

document.addEventListener("keydown",function(event){
    if(event.keyCode === 37) {
        snake[0].x -= 32;
    }
    if(event.keyCode === 39) {
        snake[0].x += 32;
    }
    if(event.keyCode === 38) {
        snake[0].y -= 32;
    }
    if(event.keyCode === 40) {
        snake[0].y += 32;
    }
})

function game(){
    canvas.drawImage(groundImg,0,0);

    for(i = 0; i < snake.length; i++) {
        canvas.fillStyle = (i===0)?"black": "white"
        canvas.fillRect(snake[i].x,snake[i].y,32,32);
    }

    canvas.drawImage(foodImg,food.x,food.y);
}
setInterval(game,100);