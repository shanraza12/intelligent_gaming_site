const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let snake, food, dx, dy, score, gameRunning;

function startGame() {
    snake = [{ x: 200, y: 200 }];
    food = randomFood();
    dx = 20;
    dy = 0;
    score = 0;
    gameRunning = true;
}

function randomFood() {
    return {
        x: Math.floor(Math.random() * 20) * 20,
        y: Math.floor(Math.random() * 20) * 20
    };
}

function draw() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, 400, 400);

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 20, 20);

    // Draw snake
    ctx.fillStyle = "lime";
    snake.forEach(part => ctx.fillRect(part.x, part.y, 20, 20));

    moveSnake();
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Wall collision = GAME OVER
    if (head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400) {
        gameOver();
        return;
    }

    // Self collision
    for (let part of snake) {
        if (part.x === head.x && part.y === head.y) {
            gameOver();
            return;
        }
    }

    snake.unshift(head);

    // Eat food
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = randomFood();
        document.getElementById("score").innerText = score;
    } else {
        snake.pop();
    }
}

function gameOver() {
    gameRunning = false;
    alert("Game Over!\nYour Score: " + score);
    startGame();
}

document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight" && dx === 0) { dx = 20; dy = 0; }
    if (e.key === "ArrowLeft" && dx === 0) { dx = -20; dy = 0; }
    if (e.key === "ArrowUp" && dy === 0) { dx = 0; dy = -20; }
    if (e.key === "ArrowDown" && dy === 0) { dx = 0; dy = 20; }
});

startGame();
setInterval(draw, 150);
