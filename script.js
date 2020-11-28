/*tic tac Toe */

let firstPlayer = [];
let secondPlayer = [];
let winnerSolution = [ [00, 10, 20], [01, 11, 21], [02, 12, 22], [00, 01, 02], [10, 11, 12], [20, 21, 22], [00, 11, 22], [02, 11, 20] ];

function winner() {
    for(let i = 0; i <= 9; i++){
        if(firstPlayer = winnerSolution){
            document.getElementById("winner").textContent = "Winner is Player 1";
        }else if(secondPlayer = winnerSolution){
            document.getElementById("winner").textContent = "Winner is Player 2";
        }else{
            document.getElementById("winner").textContent = "Nobody won";
        }
    }

    document.getElementById('resetButton').onclick = function () { reset(); }
}

function TTT() {

}

function reset() {
    firstPlayer = [];
    secondPlayer = [];

    let board = document.getElementById("board");

    
}

