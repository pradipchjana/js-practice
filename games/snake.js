const HIGHT = 20;
const WIDTH = 40;

function generateRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

let snakeX = [6, 5, 4];
let snakeY = [6, 6, 6];
let foodX = generateRandomNumber(WIDTH);
let foodY = generateRandomNumber(HIGHT);
let score = 0;
const EAST = 'EAST';
const NORTH = 'NORTH';
const SOUTH = 'SOUTH';
const WEST = 'WEST';
let direction = EAST;
let gameOver = false;

function draw() {
  console.clear();
  for (let y = 0; y < HIGHT; y++) {
    let row = '';
    for (let x = 0; x < WIDTH; x++) {
      if (y === 0 || x === 0 || y === HIGHT - 1 || x === WIDTH - 1) {
        row += "🟩";
      } else if (x === foodX && y === foodY) {
        row += '🐰';
      } else {
        let found = false;
        for (let index = 0; index < snakeX.length; index++) {
          if (snakeX[index] === x && snakeY[index] === y) {
            if (index == 0) {
              row += "🐲";
            } else {
              row += "🦠";
            }
            found = true;
            break;
          }
        }
        if (!found) {
          row += "  ";
        }
      }
    }
    console.log(row);
  }
  console.log(score);
}

const directions = [NORTH, EAST, SOUTH, WEST];
const movementKeys = ['w', 'd', 's', 'a'];

function move(moves) {
  let newX = snakeX[0];
  let newY = snakeY[0];

  let movementKey = moves.trim() !== "" ? moves.trim() : movementKeys[directions.indexOf(direction)]

  switch (movementKey) {
    case 'a': {
      direction = WEST;
      newX--;
      break
    };
    case 'd': {
      direction = EAST;
      newX++;
      break;
    }
    case 'w': {
      direction = NORTH;
      newY--;
      break;
    }
    case 's': {
      direction = SOUTH;
      newY++;
      break;
    }
    default:
      console.clear();
      draw();
      play();
  }

  if (newX <= 0 || newY <= 0 || newX >= WIDTH || newY >= HIGHT) {
    gameOver = true;
    return;
  }

  for (let index = 0; index < snakeX.length; index++) {
    if (snakeX[index] === newX && snakeY[index] === newY) {
      gameOver = true;
      return;
    }
  }

  snakeX.unshift(newX);
  snakeY.unshift(newY);
  if (newX === foodX && newY === foodY) {
    score++;
    changeFoodLocation();
  } else {
    snakeX.pop();
    snakeY.pop();
  }
}

function isInSnakePosition() {
  for (let index = 0; index < snakeX.length; index++) {
    if (snakeX[index] === foodX && snakeY[index] === foodY) {
      return true;
    }
  }
  return false;
}

function changeFoodLocation() {
  foodX = generateRandomNumber(WIDTH);
  foodY = generateRandomNumber(HIGHT);
  if (foodX === 0 || foodX === WIDTH - 1 || foodY === 0 || foodY === HIGHT - 1 || isInSnakePosition()) {
    changeFoodLocation();
  }
}

function play() {
  if (gameOver) {
    console.clear();
    console.log("GameOver 💀");
    console.log("Your Score: ", score);
    return;
  }
  const moves = prompt("Enter Move");
  move(moves);
  draw();
  play();
}

draw();
play();
