const SIZE = 30;
const screen = Array.from({ length: SIZE }, () => Array(SIZE).fill(" "));

let paddleX = SIZE - 1;
let paddleStart = 7;
let paddleWidth = 6;

let ball = { x: 5, y: 1, dx: -1, dy: 1 };
let score = 0;

const clearScreen = () => {
  for (let i = 0; i < SIZE; i++)
    for (let j = 0; j < SIZE; j++)
      screen[i][j] = " ";
};

const drawPaddle = () => {
  for (let i = 0; i < paddleWidth; i++) {
    screen[paddleX][paddleStart + i] = "_";
  }
};

const drawBall = () => {
  screen[ball.x][ball.y] = "🥎";
};

const showScreen = () =>
  screen.map(r => r.join("")).join("\n");

const clampBounce = (pos, dir, max) => {
  if (pos < 0) return [-dir, 0];
  if (pos >= max) return [-dir, max - 1];
  return [dir, pos];
};

const reflectFromPaddle = () => {
  let hit = ball.y - paddleStart;
  let mid = (paddleWidth - 1) / 2;

  ball.dx = -1;                
  ball.dy = Math.sign(hit - mid); 
  score++;
};

const updateBall = () => {
  ball.x += ball.dx;
  ball.y += ball.dy;

  [ball.dx, ball.x] = clampBounce(ball.x, ball.dx, SIZE);
  [ball.dy, ball.y] = clampBounce(ball.y, ball.dy, SIZE);

  if (
    ball.x === paddleX - 1 &&
    ball.y >= paddleStart &&
    ball.y < paddleStart + paddleWidth
  ) {
    reflectFromPaddle();
  }

  if (ball.x === SIZE - 1) {
    console.clear();
    console.log("GAME OVER — Score:", score);
    throw "";
  }
};

const movePaddle = () => {
  setTimeout(() => {
    const key = prompt("a←  d→").trim().toLowerCase();
    if (key === "a" && paddleStart > 0) paddleStart--;
    if (key === "d" && paddleStart + paddleWidth < SIZE) paddleStart++;
  }, 10);
};

const loop = () => {
  clearScreen();
  updateBall();
  drawPaddle();
  drawBall();
  console.log(showScreen());
  console.log("Score:", score);

  movePaddle();
  const tm = setTimeout(loop, 80);
};

loop();