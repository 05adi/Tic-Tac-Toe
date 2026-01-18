const gameInfo=document.querySelector('.gameInfo');
const boxes=document.querySelectorAll('.box');
const newGameBtn=document.querySelector('.btn');

let currentPlayer;
let gameGrid;

const winningPositions=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function initialize(){
    currentPlayer="X";
    gameGrid=["", "", "", "", "", "", "", "", ""];
    newGameBtn.classList.remove("active");
    gameInfo.innerText=`Current Player - ${currentPlayer}`;

    boxes.forEach((box) => {
        box.innerText="";
        box.style.pointerEvents="all";
        box.classList.remove("win");
    });
}

initialize();

function swap(){
    if(currentPlayer==="X") currentPlayer="O";
    else currentPlayer="X";
}

function checkGameOver(){
    let winner="";

    winningPositions.forEach((position) => {
         if((gameGrid[position[0]]!=="") && (gameGrid[position[0]]===gameGrid[position[1]]) && (gameGrid[position[1]]===gameGrid[position[2]])){
            winner=gameGrid[position[0]]==="X"? "X" : "O";

            boxes.forEach((box) => {
                box.style.pointerEvents="none";
            });

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
         }
    });

    if(winner!==""){
        gameInfo.innerText=`Winner is - ${winner}`;
        newGameBtn.classList.add("active");
        return;
    }

    let fillCount=0;
    gameGrid.forEach((box) => {
        if(box!==""){
            fillCount++;
        }
    });

    if(fillCount===9){
        gameInfo.textContent="Game Tied !";
        newGameBtn.classList.add("active");
    }

}

function handleClick(index){
    if(gameGrid[index]===""){
        boxes[index].style.pointerEvents="none";
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;

        swap();

        gameInfo.innerText=`Current Player : ${currentPlayer}`;
        checkGameOver();
    }
}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(index);
    });
});

newGameBtn.addEventListener('click', initialize);


