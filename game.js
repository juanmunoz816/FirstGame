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
let x;
let y;

const playerPosition = {
    x: undefined,
    y: undefined,
}

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

    game.clearRect(0,0,canvasSize,canvasSize);

    x = elementsSize;
    y = elementsSize * 0.98;

   mapRowCol.forEach((row, rowI) =>{
    row.forEach((col, colI) => {
        const emoji = emojis[col];
        const posX = x * (colI + 1)
        const posY = y * (rowI + 1);

        if (col == "O"){
            if (!playerPosition.x && !playerPosition.y){
                playerPosition.x = posX;
                playerPosition.y = posY;
            }
        }

        game.fillText(emoji, posX, posY)
    })
   })

   movePlayer();
  
/*     
Esta fue la primera forma cómo se calculo el mapa
for (let i = 1; i <= 10; i++){
        for(let j = 1; j <= 10; j++){
            game.fillText(emojis[mapRowCol[i-1][j-1]] , x *j , y*i  )  
        }
        
    }*/

} 

function movePlayer(){
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)

}

function moveUp() {
    console.log('Up');
    if (playerPosition.y - y >= 0) {
        playerPosition.y -= y;
        startGame();
    }
}

function moveLeft() {
    console.log('Left');
    if (playerPosition.x - x >= 1) {
        playerPosition.x -= x;
        startGame();
    }
}


function moveDown() {
    console.log('Down');
    if (playerPosition.y + y < canvasSize) {
        playerPosition.y += y;
        startGame();
    }
}


function moveRight() {
    console.log('Right');
    if (playerPosition.x + x < (canvasSize+1)) {
        playerPosition.x += x;
        startGame();
    }
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