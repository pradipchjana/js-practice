const HIGHT = 10;
const WIDTH = 20;

function generateRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

let snakeX = 7;
let snakeY = 6;
let foodX = generateRandomNumber(WIDTH);
let foodY = generateRandomNumber(HIGHT);
let score = 0;
let gameOver = false;

function draw() {
  console.clear();
  for (let y = 0; y < HIGHT; y++) {
    let row = '';
    for (let x = 0; x < WIDTH; x++) {
      if (y === 0 || x === 0 || y === HIGHT - 1 || x === WIDTH - 1) {
        row += "🌲";
      } else if (x === snakeX && y === snakeY) {
        row += "🐲";
      } else if (x === foodX && y === foodY) {
        row += '🐰';
      } else {
        row += '  '
      }
    }
    console.log(row);
  }
  console.log(score);

}

function move(moves) {
  switch (moves) {
    case 'a': snakeX = snakeX !== 1 ? snakeX - 1 : WIDTH - 2; break;
    case 'd': snakeX = snakeX !== WIDTH - 2 ? snakeX + 1 : 1; break;
    case 'w': snakeY = snakeY !== 1 ? snakeY - 1 : HIGHT - 2; break;
    case 's': snakeY = snakeY !== HIGHT - 2 ? snakeY + 1 : 1; break;
  }
}

function changeFoodLocation() {
    foodX = generateRandomNumber(WIDTH);
    foodY = generateRandomNumber(HIGHT);
    if (foodX === 0 || foodX === WIDTH - 1 || foodY === 0 || foodY === HIGHT - 1) {
      changeFoodLocation();
    }
}

function play() {
  const moves = prompt("Enter Move");
  move(moves);
  if (snakeX === foodX && snakeY === foodY) {
    score++;
    changeFoodLocation();
  }
  draw();
  play();
}

draw();
play();
