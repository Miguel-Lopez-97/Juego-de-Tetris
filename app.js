let canvas;
let ctx;

let newBlock;

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
            for( let m=0; m<15; m++){
                scenary[n][m]=0;
            }
    }
//Blocks Array
    //Valores referencia de coordenadas relativas
/* let pos=[
    [0,0],
    [0,1],
    [-1,0],
    [1,0],
    [-1,-1],
    [0,-1],
    [1,-1],
    [0,-2]];

let blocks = [
    [4,0,1,2,3], 
    [4,0,1,5,6],  
    [4,0,1,5,4],
    [2,0,1,5,7],
    [2,0,2,5,6],
    [2,0,3,5,4],
    [1,0,5,6,3]] */
    



let newBlocks = function () {
    this.x =5
    this.y = 0
    this.rot = false
    this.l
    this.n
<<<<<<< HEAD
    this.rotate 

//     // origen del punto de transformación
// ctx.arc(0, 0, 5, 0, 2 * Math.PI);
// ctx.fillStyle = 'blue';
// ctx.fill();

// // rectángulo sin rotar
// ctx.fillStyle = 'gray';
// ctx.fillRect(100, 0, 80, 20);

// rectángulo rotado 45º

/* ctx.fillStyle = 'red';
ctx.fillRect(100, 0, 80, 20);
 */
// // se reinicia la matriz de transformación a la matriz identidad
// ctx.setTransform(1, 0, 0, 1, 0, 0);

    // this.rotate = function () {
    //     if(this.rot==true){this.rot=false
    //         ctx.rotate(45 * Math.PI / 180);}

    //     else{this.rot=true
    //         ctx.rotate(45 * Math.PI / 180);}
    //     console.log(this.rot)
    //     return this.rot
    // }
=======
    
    this.aleatorio = function(){
        this.newBlock = Math.floor(Math.random()*1)
        console.log(newBlock)
        return this.newBlock}
    
    


// Matriz de transformación


    this.rotate = function () {
        if(this.rot==true){this.rot=false}
        else{this.rot=true}
        console.log(this.rot)
        return this.rot
        
    }
>>>>>>> a509bc5d7e28e9836ed2e63ed8738034645fbf78

    this.draw = function(){


        switch(this.newBlock){

            case 0:
                    l=1
                    n=4
                    for (i=0;i <n ; i++){
<<<<<<< HEAD
                        for (j=0;j <l ; j++){
                            ctx.fillStyle   =   block
                            ctx.fillRect(   (this.x+j)*widthC,  (this.y+i)*heightC,  widthC, heightC)    
                        }          
                    }
                }    
                
                else if(this.rot==false){
=======
                        for (j=0;j <l ; j++){     
                            ctx.fillStyle   =   block
                            ctx.fillRect(   (this.x+j)*widthC,  (this.y+i)*heightC,  widthC, heightC)
                        }          
                    }
                  
               /*  
                if(this.rot==false){
>>>>>>> a509bc5d7e28e9836ed2e63ed8738034645fbf78
                    l=4
                    n=1
                    for (i=0;i <n ; i++){
                        for (j=0;j <l ; j++){
                            ctx.fillStyle   =   block
                            ctx.fillRect(   (this.x+j)*widthC,  (this.y+i)*heightC,  widthC, heightC)           
                        }          
                    }   
                } */
            break
<<<<<<< HEAD
=======
            
>>>>>>> a509bc5d7e28e9836ed2e63ed8738034645fbf78
            /* case 1:
                l=2
                n=2
                for (i=0;i <n ; i++){
                    for (j=0;j <l ; j++){
                        ctx.fillStyle   =   block
                        ctx.fillRect(   (this.x+j)*widthC,  (this.y+i)*heightC,  widthC, heightC)            
                    }          
                }
                drawScenary()
            break
            
            case 2:
                if(this.rot==true){
                    l=3
                    n=2
                    for (i=0;i <1 ; i++){
                        for (j=0;j <l ; j++){
                            ctx.fillStyle   =   block
                            ctx.fillRect(   (this.x+j)*widthC,  (this.y+i)*heightC,  widthC, heightC)           
                        }
                    }
                    for (i=1;i <n ; i++){
                        ctx.fillStyle   =   block
                        ctx.fillRect(   (this.x+j-1)*widthC,  (this.y+i)*heightC,  widthC, heightC)            
                    }
                }
                if(this.rot==false){
                    l=2
                    n=3
                    for (i=0;i <1 ; i++){
                        for (j=0;j <l ; j++){ 
                            ctx.fillStyle   =   block
                        ctx.fillRect(   (this.x+j)*widthC,  (this.y+i)*heightC,  widthC, heightC)          
                        }
                    }
                    for (i=1;i <n ; i++){  
                            ctx.fillStyle   =   block
                        ctx.fillRect(   (this.x)*widthC,  (this.y+i)*heightC,  widthC, heightC)          
                    }
                } */
                /* if(this.rot==false){
                    l=2
                    n=3
                    for (i=0;i <1 ; i++){
                        scenary[this.y+i][this.x] = 1             
                    }
                    for (i=1;i <l ; i++){
                        for (j=0;j <l ; j++){
                            scenary[this.y+i][this.x+j] = 1             
                        }
                    }
                }
                if(this.rot==false){
                    l=3
                    n=2
                    for (i=0;i <1 ; i++){
                        scenary[this.y+i][this.x+i] = 1             
                    }
                    for (i=1;i <n ; i++){
                        for (j=0;j <l ; j++){
                            scenary[this.y+i][this.x+j] = 1             
                        }
                    }
                }    */       
                
<<<<<<< HEAD
=======
            break 
>>>>>>> a509bc5d7e28e9836ed2e63ed8738034645fbf78

        }
    }
    

    
    this.margins = function(y,x){
        let colision = true
        if (scenary[y][x] == 0)
            {colision   = false}
        return colision
    }

    this.down = function(){
        if(this.y+n<scenary.length && this.margins(this.y+n,this.x+l) == false)
        {this.y++
        
        }
        else{this.y
<<<<<<< HEAD
            this.draw}
=======
            for (i=0;i <n ; i++){
                    for (j=0;j <l ; j++){
                        scenary[this.y+i][this.x+j] = 1  
                    }
            }
            this.aleatorio()
            this.draw()
            this.x =5
            this.y = 0
            }
>>>>>>> a509bc5d7e28e9836ed2e63ed8738034645fbf78
    }

    
    this.left = function(){
        if(this.x-1>=0 && this.margins(this.y,this.x-1) == false)
        {   this.x--
            /* for(i=0; i<n; i++)
            {   scenary[this.y+i][this.x+1] = 0
                scenary[this.y+i][this.x+l] = 0} */
        }
        else{this.x
            this.draw}
        
    }

    this.right = function(){     
        if(this.x+l<scenary[this.y].length && this.margins(this.y,this.x+l) == false)
        {   this.x++
<<<<<<< HEAD
           
            for(i=0; i<n; i++)
            {   scenary[this.y+i][this.x-1] = 0
                 scenary[this.y+i][this.x+l] = 0 }
=======
           /*  for(i=0; i<n; i++)
            {   scenary[this.y+i][this.x-1] = 0 */
                /* scenary[this.y+i][this.x+l] = 0 }*/
>>>>>>> a509bc5d7e28e9836ed2e63ed8738034645fbf78
        }
        else{this.x 
            this.draw} 
        
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
    player.aleatorio()

    document.addEventListener("keydown", function(key){
        if(key.key  ==  "ArrowDown" || key.key  ==  "s"){player.down()}
        if(key.key  ==  "ArrowLeft" || key.key  ==  "a"){player.left()}
        if(key.key  ==  "ArrowRight"|| key.key  ==  "d"){player.right()}
        if(key.key  ==  "ArrowUp"|| key.key  ==  "w"){player.rotate()}
    })

    setInterval(
        function () {principal()},
        900/FPS)
    
}

function principal(){
    drawScenary()
    player.draw()
}