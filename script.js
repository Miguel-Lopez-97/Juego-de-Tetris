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
    for (let n=20; n<21;n++){
        scenary[n]=new Array(columns)
            for( let m=0; m<columns; m++){
                scenary[n][m]=1;
            }
        }
    

    //Size of Cube

let widthC = 25;
let heightC = 25;

//Blocks Array

let newBlocks = function () {

    this.x =5
    this.y = 0

    //Rotacion
    this.rot = Math.ceil(Math.random()*4)
   
    //Largo de la pieza
    this.l
    
    //Ancho de la pieza
    this.n
    
    // variables de colision
    this.colision = false
    this.colisionLeft = false
    this.colisionRight = false
    this.blockFull = 0
    
    //funcion aleatorio, permite generar un input diferente para dibujar cada pieza nueva

    this.aleatorio = function(){
        this.newBlock = Math.ceil(Math.random()*7)
        return this.newBlock
    }

    //Función de rotación, asigna un valor a la variable rot en función, para rotar la figura

    this.rotate = function () {
        if(this.rot>=0 &&this.rot<4 &&this.colision==false){
            this.rot++}
        else{this.rot=1}
        return this.rot}

    //Función de dibujado de bloque y colición, cada ficha esta dada por una serie de coordenadas en su respectivo
    //array, lo que hace esta función ciclica es dibujar la ficha a partir de sus coordenadas y se actualize 
    //al cambio de posición, asi como verificar que no halla una colisón en el movimiento

    this.drawBlock = function(a,c,b,d){
       for (i=c;i <a ; i++){ //recorre las posiciones de la ficha en y luego en x y las dibuja
            for (j=d;j <b ; j++){
                ctx.fillStyle   =   block
                ctx.fillRect(   (this.x+j)*widthC,  (this.y+i)*heightC,  widthC, heightC)

                //verifica la coliciòn lateralmente
                if(scenary[this.y+i+1][this.x+j]==0){
                    //Izq
                    if(scenary[this.y+i][this.x+j-1]==1)                
                    {   this.colisionLeft = true
                        this.colisionRight = false
                        }
                    //Der
                    else if(scenary[this.y+i][this.x+j+1]==1){
                        this.colisionRight = true
                        this.colisionLeft = false
                      }
                }
                //verifica la colición verticalmente
                else if(scenary[this.y+i+1][this.x+j]==1) {
                        this.colision = true
                        this.colisionLeft = true
                        this.colisionRight = true
                        //una vez detectada, realiza un ciclo iterativo para asignar la posición de cada
                        //parte de la ficha a la matriz scenary con un 1
                        for (i=c;i <a ; i++){
                            for (j=d;j <b ; j++){
                                scenary[this.y+i][this.x+j]=1
                            }
                        }
                        
                }        
                
            }
        }
    }

    //Mueve la ficha a la izquierda, teniendo claro que no colisione y el limite izq del canvas
    
    this.left = function(){
        if(this.x>0 && this.colisionLeft==false)
        //si permite el movimiento retorna falso el valor de la colisión contrario a este movimiento
        {   this.x--
            this.colisionRight=false
            this.colision=false
            }

        else if(this.colision=true){
            this.x
        }       
    }

    //Mueve la ficha a bajo, teniendo claro que no colisione
    this.down = function(){
        //si permite el movimiento retorna falso el valor de la colisión contrario a este movimiento
        if(this.colision==false)
            {this.y++
            this.colisionLeft=false
            this.colisionRight=false
            }

        else{this.y
            this.drawNew()
            }
    }
    //Mueve la ficha a la derecha, teniendo claro que no colisione y el limite der del canvas
    this.right = function(){     
        //si permite el movimiento retorna falso el valor de la colisión contrario a este movimiento
        if(this.x+l<scenary[this.y].length  && this.colisionRight == false)
        {   this.x++
            this.colisionLeft=false
            this.colision=false
           }
        else{
            this.x}     
    }

    this.draw = function(){

    // dibuja apartir del numero aleatorio la figura nueva, teniendo en cuenta su rotación
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
                if(this.rot==1) {
                    this.drawBlock(1,0,3,0)
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

    // dibuja nnuevamente en el escenario una ficha
    this.drawNew = function(){
            this.x=5
            this.y=0
            this.aleatorio()
            this.draw()
            this.colision=false
            this.colisionLeft=false
            this.colisionRight=false
            
        }

    this.completeScenary = function(){

            for(i=0;i<scenary.length-1;i++)
                { for(j=0;j<scenary[i].length;    x++){
                    if(this.blockFull<scenary[i].length){
                        if(scenary[i][j]==1){
                        this.blockFull++}
                    }
                    else{scenary[i][j]=0}
                }}
        }
}
// colorea el escenario con las fichas guardadas
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

//Tiempo
let time_box
let seg=0

function timeInit(){
    let time0 = new Date();
    this.hoursInit = time0.getHours();
    this.minutesInit = time0.getMinutes();
    this.segInit = time0.getSeconds();
}

function time(){
    let timeNow = new Date();
    this.hoursNow = timeNow.getHours();
    this.minutesNow  = timeNow.getMinutes();
    this.segNow  = timeNow.getSeconds();
    this.hours = this.hoursNow-this.hoursInit
    this.minutes = this.minutesNow-this.minutesInit
    this.seg = Math.abs(this.segInit-this.segNow)
    time_box.innerHTML=this.hours+':'+this.minutes+':'+this.seg}

let player;

function init(){
    canvas=document.getElementById("canva")
    ctx=canvas.getContext("2d")
    time_box=document.getElementById("counter_time")
    timeInit()
    
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
        200/FPS)
    
}

function principal(){
    drawScenary()
    player.draw()
    time()
}