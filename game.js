const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load' , setCanvasSize);
window.addEventListener('resize' ,setCanvasSize)


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

    const map = maps[2]
    const mapRow = map.trim().split('\n');
    console.log(mapRow);
    const mapRowCol = mapRow.map (row => row.trim().split(''));

    let x = elementsSize;
    let y = elementsSize * 0.98;

    for (let i = 1; i <= 10; i++){
        for(let j = 1; j <= 10; j++){
            game.fillText(emojis[mapRowCol[i-1][j-1]] , x *j , y*i  )  
        }
        
    }
}