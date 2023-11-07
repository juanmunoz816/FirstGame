const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

/* botones */

const up = document.querySelector('#up');
const left = document.querySelector('#left');
const down = document.querySelector('#down');
const right = document.querySelector('#right');

up.addEventListener('click', moveUp);
left.addEventListener('click', moveLeft);
down.addEventListener('click', moveDown);
right.addEventListener('click', moveRight);

window.addEventListener('keydown', moveKeyBoard);
window.addEventListener('keyup', btnUP)

let canvasSize;
let elementsSize;

window.addEventListener('load' , setCanvasSize);
window.addEventListener('resize' ,setCanvasSize);


function setCanvasSize(){
    

    if(window.innerHeight > window.innerWidth){
        canvasSize = innerWidth*0.7;
    }else{
        canvasSize = innerHeight *0.7;
    }

    canvas.setAttribute('width' , canvasSize);
    canvas.setAttribute('height', canvasSize);
    
    elementsSize = (canvasSize/ 10);

    startGame()
}

function startGame(){



    game.font = (elementsSize*0.8) + 'px Roboto Mono';
    game.textAlign = 'end'

    const map = maps[0]
    const mapRow = map.trim().split('\n');
    console.log(mapRow);
    const mapRowCol = mapRow.map (row => row.trim().split(''));

    let x = elementsSize;
    let y = elementsSize * 0.98;

   mapRowCol.forEach((row, rowI) =>{
    row.forEach((col, colI) => {
        const emoji = emojis[col];
        const posX = x * (colI + 1)
        const posY = y * (rowI + 1);
        game.fillText(emoji, posX, posY)
    })
   })
  
/*     
Esta fue la primera forma cómo se calculo el mapa
for (let i = 1; i <= 10; i++){
        for(let j = 1; j <= 10; j++){
            game.fillText(emojis[mapRowCol[i-1][j-1]] , x *j , y*i  )  
        }
        
    }*/

} 

function moveUp(){
    console.log('Up');
}

function moveLeft(){
    console.log('Left');
}

function moveDown(){
    console.log('Down');
}

function moveRight(){
    console.log('Rigth');
}

function moveKeyBoard(key){
    
    switch (key.key){
        case 'ArrowUp':
            up.classList.add('press')
            up.click();
              break;
        
        case 'ArrowLeft':
            left.classList.add('press')
            left.click();
            break;

        case 'ArrowDown':
            down.classList.add('press')
            down.click();
            break;

        case 'ArrowRight':
            right.classList.add('press')
            right.click();
            break;
    }
}

function btnUP(){
    up.classList.remove('press')
    left.classList.remove('press')
    down.classList.remove('press')
    right.classList.remove('press')

}