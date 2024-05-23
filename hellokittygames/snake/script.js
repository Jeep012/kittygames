// Initialize the game (this example is for the snake game)
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 400;
canvas.height = 400;

// Example snake game code
let snake = [{ x: 200, y: 200 }];
let direction = 'RIGHT';

function drawSnake() {
    ctx.fillStyle = '#ff69b4';
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, 20, 20);
    });
}

function update() {
    const head = { ...snake[0] };
    if (direction === 'RIGHT') head.x += 20;
    if (direction === 'LEFT') head.x -= 20;
    if (direction === 'UP') head.y -= 20;
    if (direction === 'DOWN') head.y += 20;

    snake.unshift(head);
    snake.pop();
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    drawSnake();
    requestAnimationFrame(gameLoop);
}

gameLoop();
