let cvx = document.getElementById("canva");
let canvas = cvx.getContext("2d");
let groundImg, foodImg;
groundImg = new Image();
foodImg = new Image();
groundImg.src = "ground.png";
foodImg.src = "food.png";
let direct;
let pX, pY;
let newHead;

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
    if(event.keyCode === 37 && direct !== "right") {
        //snake[0].x -= 32;
        direct = "left"
    }
    if(event.keyCode === 39 && direct !== "left") {
        //snake[0].x += 32;
        direct = "right"
    }
    if(event.keyCode === 38 && direct !== "down") {
        //snake[0].y -= 32;
        direct = "up"
    }
    if(event.keyCode === 40 && direct !== "up") {
        //snake[0].y += 32;
        direct = "down"
    }
})

function game(){
    canvas.drawImage(groundImg,0,0);

    for(i = 0; i < snake.length; i++) {
        canvas.fillStyle = (i===0)?"black": "white"
        canvas.fillRect(snake[i].x,snake[i].y,32,32);
    }

    canvas.drawImage(foodImg,food.x,food.y);

    pX = snake[0].x;
    pY = snake[0].y;


    if(direct === "right") {
        pX += 32;
    }
    if(direct === "left") {
        pX -= 32;
    }
    if(direct === "up") {
        pY -= 32
    }
    if(direct === "down") {
        pY += 32;
    }

    newHead = {
        x: pX,
        y: pY
    }
    snake.unshift(newHead);

    pX === food.x && pY === food.y?food = {
        x: Math.round(Math.random()*17)*32,
        y: Math.round(Math.random()*17)*32
    }:snake.pop();
}
setInterval(game,100);