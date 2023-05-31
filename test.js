const gameBoard = document.getElementById('game-board');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const ctx = gameBoard.getContext('2d');

// Define game board size and grid
const ROWS = 20;
const COLS = 20;
const GRID_SIZE = 20;
gameBoard.width = ROWS * GRID_SIZE;
gameBoard.height = COLS * GRID_SIZE;

// Set up initial snake body
let snake = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 }
];

// Create game loop
let gameLoop;

function startGame() {
  gameLoop = setInterval(updateGame, 100);
}

function pauseGame() {
  clearInterval(gameLoop);
}

function resetGame() {
  // Reset snake and score
  snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
  ];
  score = 0;
}

function updateGame() {
  // Move snake
  let head = { x: snake[0].x, y: snake[0].y };
  switch (direction) {
    case 'up':
      head.y--;
      break;
    case 'down':
      head.y++;
      break;
    case 'left':
      head.x--;
      break;
    case 'right':
      head.x++;
      break;
  }
  snake.unshift(head);
  snake.pop();

  // Check for collisions with food and game board edges
  // Update score and add new food

  // Clear game board and redraw elements
  ctx.clearRect(0, 0, gameBoard.width, gameBoard.height);
  drawSnake();
  drawFood();
  drawScore();
}

function drawSnake() {
  snake.forEach(segment => {
    ctx.fillStyle = 'green';
    ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
  });
}

function drawFood() {
  // Randomly place food on board
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
}

function drawScore() {
  // Draw score on screen
}

// Detect key presses
let direction = 'right';
document.addEventListener('keydown', event => {
  if (event.key == 'a' && direction != 'right') {
    direction = 'left';
  } else if (event.key == 'w' && direction != 'down') {
    direction = 'up';
  } else if (event.key == 'd' && direction != 'left') {
    direction = 'right';
  } else if (event.key == 's' && direction != 'up') {
    direction = 'down';
  }
});

startButton.addEventListener('click', startGame);
pauseButton.addEventListener('click', pauseGame);
resetButton.addEventListener('click', resetGame);