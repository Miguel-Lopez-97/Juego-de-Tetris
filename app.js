let canvas;
let ctx;

//FPS
const FPS = 60;

//Size of Cube
let widthC = 25;
let heightC = 25;

//Colors
let block = "white"
let fondo ="#007D5F"
//Scenary Array

let scenary = new Array(20)
    for (let n=0; n<20;n++){
        scenary[n]=new Array(15)
            for( let m=0; m<9; m++){
                scenary[n][m]=0;
            }
    }

function drawScenary() {
    let color;
    for(    y=0;    y<scenary.length;   y++){
        for(    x=0;    x<scenary[y].length;    x++){
                if( scenary[y][x] ==    0){color    =   fondo}
                if( scenary[y][x] ==    1){color    =   block}
                ctx.fillStyle   =   color
                ctx.fillRect(   x*widthC,  y*heightC,  widthC, heightC)
                
                ctx.strokeRect(x, y, widthC, heightC);
        }
    }
}

//Blocks Array

let newBlocks = function () {
    this.x=7
    this.y=0
    this.color = "white"

    this.draw = function() {
        ctx.fillStyle = this.color;
         ctx.fillRect(this.x*widthC, this.y*heightC, widthC, heightC)
        }

    this.down = function(){this.y++}



}

//time vars

let timeGame = function() {
    let second = time.getSeconds()
    return second
}

let timeBlock = function() {
    let second = time.getSeconds()
    return second
}

let player;

function init(){
    canvas=document.getElementById("canva")
    ctx=canvas.getContext("2d")
    
    player = new newBlocks()

    document.addEventListener("keydown", function(key){
        if(key.key  ==  "ArrowDown" || key.key  ==  "s"){player.down()}
    })

    setInterval(
        function () {principal()},
        1000/FPS)
    
}

function principal(){
    drawScenary()
    player.draw()
}