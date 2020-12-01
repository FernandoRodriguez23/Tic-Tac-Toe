/*tic tac Toe */

let firstPlayer = [];
let secondPlayer = [];
let turn = "x";
let winnerSolution = [ ["q1", "q2", "q3"], ["q4", "q5", "q6"], ["q7", "q8", "q9"], ["q1", "q5", "q9"], ["q7", "q5", "q3"], ["q1", "q4", "q7"], ["q2", "q5", "q7"], ["q3", "q6", "q9"] ];

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

function choseQuadrent(input) {
    if(turn == "x"){
        document.getElementById(input).textContent = "x";
        turn = "o";
    }else{
        document.getElementById(input).textContent = "o";
        turn = "x";
    }

    
}


function reset() {
    firstPlayer = [];
    secondPlayer = [];

    let board = document.getElementById("board");


}

