//Variables generales del juego

let canvas;
let ctx;
let newBlock;

    //FPS
const FPS = 60;

    //Colors
let block = "white"
let fondo ="#7D0000"

//Scenary Array

let columns = 15;
let rows = 20;

let scenary = new Array(rows)
    for (let n=0; n<rows;n++){
        scenary[n]=new Array(columns)
            for( let m=0; m<columns; m++){
                scenary[n][m]=0;
            }
    }
    //Size of Cube

let widthC = 25;
let heightC = 25;

//Blocks Array

let newBlocks = function () {

    this.x =5
    this.y = 0
    ctx.save()
    //Rotacion
    this.rot = Math.ceil(Math.random()*4)
    //Largo de la pieza
    this.l
    //Ancho de la pieza
    this.n
    this.numero = 0

    this.aleatorio = function(){
        this.newBlock = Math.ceil(Math.random()*7)
        console.log(this.newBlock)
        return this.newBlock
    }

    

    this.rotate = function () {

        if(this.rot>=0 &&this.rot<4){this.rot++}
        else{this.rot=1}
        console.log(this.rot)
        return this.rot}

    this.drawBlock = function(a,c,b,d){
        for (i=c;i <a ; i++){
            for (j=d;j <b ; j++){
                ctx.fillStyle   =   block
                ctx.fillRect(   (this.x+j)*widthC,  (this.y+i)*heightC,  widthC, heightC)
                if(this.colision==true){
                    scenary[this.y+i][this.x+j]=1
                    console.log("finish"+this.numero)
                    this.numero++
                    }  
               }
        }
        
        
    }  

    this.draw = function(){

        if(this.numero<10){

        switch(this.newBlock){
            //linea
            case 1:
                if(this.rot==1 || this.rot==3 ){
                    this.drawBlock(1,0,4,0)
                l=4
                n=1
                }
                
                else if(this.rot==2 || this.rot==4 ){
                    this.drawBlock(4,0,1,0)
                l=1
                n=4 
                }
            break
            //Cuadrado
            case 2:
                this.drawBlock(2,0,2,0)
                l=2
                n=2
            break
            //L 
            case 3:
                if(this.rot==1) {this.drawBlock(1,0,3,0)
                    this.drawBlock(2,1,3,2)
                    l=3
                    n=2}
                else if(this.rot==2) {
                    this.drawBlock(1,0,2,1)
                    this.drawBlock(2,1,2,1)
                    this.drawBlock(3,2,2,0)
                    l=2
                    n=3}
                else if(this.rot==3) {
                    this.drawBlock(1,0,1,0)
                    this.drawBlock(2,1,3,0)
                    l=3
                    n=2}   
                else if(this.rot==4) {
                    this.drawBlock(1,0,2,0)
                    this.drawBlock(2,1,1,0)
                    this.drawBlock(3,2,1,0)
                    l=2
                    n=3} 
            break
            //L invertida
            case 4:
                if(this.rot==1) {
                    this.drawBlock(1,0,3,0)
                    this.drawBlock(2,1,1,0)
                    l=3
                    n=2}
                else if(this.rot==2) {
                    this.drawBlock(1,0,2,0)
                    this.drawBlock(2,1,2,1)
                    this.drawBlock(3,2,2,1)
                    l=2
                    n=3}
                else if(this.rot==3) {
                    this.drawBlock(1,0,3,2)
                    this.drawBlock(2,1,3,0)
                    l=3
                    n=2}
                else if(this.rot==4) {
                    this.drawBlock(1,0,1,0)
                    this.drawBlock(2,1,1,0)
                    this.drawBlock(3,2,2,0)
                    l=2
                    n=3}
            break
            //T
            case 5:
                if(this.rot==1) {
                    this.drawBlock(1,0,2,1)
                    this.drawBlock(2,1,3,0)
                    l=3
                    n=2}
                else if(this.rot==2) {
                    this.drawBlock(1,0,1,0)
                    this.drawBlock(2,1,2,0)
                    this.drawBlock(3,2,1,0)
                    l=2
                    n=3}
                else if(this.rot==3) {
                    this.drawBlock(1,0,3,0)
                    this.drawBlock(2,1,2,1)
                    l=3
                    n=2}
                else if(this.rot==4) {
                    this.drawBlock(1,0,2,1)
                    this.drawBlock(2,1,2,0)
                    this.drawBlock(3,2,2,1)
                    l=2
                    n=3}
            break
            //Z
            case 6:
                if(this.rot==1 || this.rot==3) {
                    this.drawBlock(1,0,2,0)
                    this.drawBlock(2,1,3,1)
                l=3
                n=2}
                else if(this.rot==2 || this.rot ==4) {
                    this.drawBlock(1,0,2,1)
                    this.drawBlock(2,1,2,0)
                    this.drawBlock(3,2,1,0)
                    l=2
                    n=3}
            break
            //Z invertida
            case 7:
                if(this.rot==1|| this.rot==3) {
                    this.drawBlock(1,0,3,1)
                    this.drawBlock(2,1,2,0)
                    l=3
                    n=2}

                else if(this.rot==2|| this.rot==4) {
                    this.drawBlock(1,0,1,0)
                    this.drawBlock(2,1,2,0)
                    this.drawBlock(3,2,2,1)
                    l=2
                    n=3}
            break
        }
        }

    }

    this.margins = function(y,x){
        let colision = false
        if (scenary[y][x] == 1)
            {colision   = true}
            
        return (colision)
    }

    this.drawNew = function(){
        if(this.numero>10){
            this.x=5
            this.y=0
            this.aleatorio()
            this.draw()
            this.numero=0
            this.colision=false
        }
        
    }

    this.down = function(){
        if(this.y+n<scenary.length  && this.margins(this.y,this.x+n) == false)
            {this.y++
            this.colision = false}
        else{this.y
            this.colision = true
            this.drawNew()
            }
    }

    this.left = function(){
        if(this.x-1>=0 && this.margins(this.y,this.x-1) == false)
        {   this.x--
            this.colision = false}
        else{this.x}       
    }

    this.right = function(){     
        if(this.x+l<scenary[this.y].length && this.margins(this.y,this.x+l) == false)
        {   this.x++
            this.colision = false}
        else{this.x}     
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
                ctx.strokeStyle = "white"
                ctx.strokeRect(   x*widthC,  y*heightC,  widthC, heightC)
                
            }
    }
}

let player;

function init(){
    canvas=document.getElementById("canva")
    ctx=canvas.getContext("2d")
    
    player = new newBlocks()
    player.aleatorio()

    document.addEventListener("keydown", function(key){
        if(key.key  ==  "ArrowDown" || key.key  ==  "s"){player.down()}
        if(key.key  ==  "ArrowLeft" || key.key  ==  "a"){player.left()}
        if(key.key  ==  "ArrowRight"|| key.key  ==  "d"){player.right()}
        if(key.key  ==  "ArrowUp"|| key.key  ==  "w"){player.rotate()}
    })

    setInterval(
        function () {principal()},
        1000/FPS)
    
}

function principal(){
    drawScenary()
    player.draw()

}