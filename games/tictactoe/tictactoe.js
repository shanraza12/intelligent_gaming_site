let player = "X";
const status = document.getElementById("status");

function play(cell) {
    if (cell.innerHTML === "") {
        cell.innerHTML = player;
        player = player === "X" ? "O" : "X";
        status.innerHTML = "Player " + player + " Turn";
    }
}
