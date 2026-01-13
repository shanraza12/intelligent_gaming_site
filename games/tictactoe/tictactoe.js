let currentPlayer = "X";
let gameActive = true;

const status = document.getElementById("status");
const cells = document.querySelectorAll(".cell");

const winConditions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function play(cell, index) {
    if (cell.innerHTML !== "" || !gameActive) return;

    cell.innerHTML = currentPlayer;

    if (checkWin()) {
        status.innerHTML = "🎉 Player " + currentPlayer + " Wins!";
        gameActive = false;
        return;
    }

    if ([...cells].every(c => c.innerHTML !== "")) {
        status.innerHTML = "😐 Draw Game!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.innerHTML = "Player " + currentPlayer + " Turn";
}

function checkWin() {
    return winConditions.some(condition => {
        return condition.every(index => cells[index].innerHTML === currentPlayer);
    });
}

function restartGame() {
    cells.forEach(cell => cell.innerHTML = "");
    currentPlayer = "X";
    gameActive = true;
    status.innerHTML = "Player X Turn";
}
