let cvx = document.getElementById("canva");
let canvas = cvx.getContext("2d");
let groundImg, foodImg;
groundImg = new Image();
groundImg.src = "ground.png";
foodImg.src = "food.png";

function game(){
    canvas.drawImage(groundImg,0,0);
}

// setInterval(function(){
//     game();
//     console.log(canvas)
// },1);
setInterval(game,100);