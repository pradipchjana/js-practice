const createScreen = () => {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(" "));
}
const SIZE = 30;
const FRAME_DELAY = 80;
const screen = createScreen();

const paddle = { x: SIZE - 1, start: 7, width: 6 };

const ball = { x: 15, y: 23, dx: -1, dy: 1 };
let score = 0;
let gameOver = false;

const clearScreen = () => {
  for (let i = 0; i < SIZE; i++)
    for (let j = 0; j < SIZE; j++)
      screen[i][j] = " ";
};

const drawPaddle = () => {
  for (let i = 0; i < paddle.width; i++) {
    screen[paddle.x][paddle.start + i] = "_";
  }
};

const drawBall = () => {
  screen[ball.x][ball.y] = "🥎";
};

const showScreen = () =>
  screen.map(r => r.join("")).join("\n");

const render = () => {
  console.clear();
  console.log(showScreen());
  console.log("Score: ", score);
}

const clampBounce = (pos, dir, max) => {
  if (pos < 0) return [-dir, 0];
  if (pos >= max) return [-dir, max - 1];
  return [dir, pos];
};

const reflectFromPaddle = () => {
  const hit = ball.y - paddle.start;
  const mid = (paddle.width - 1) / 2;

  ball.dx = -1;                
  ball.dy = Math.sign(hit - mid) || 1; 
  score++;
};

const updateBall = () => {
  ball.x += ball.dx;
  ball.y += ball.dy;

  [ball.dx, ball.x] = clampBounce(ball.x, ball.dx, SIZE);
  [ball.dy, ball.y] = clampBounce(ball.y, ball.dy, SIZE);

  if (
    ball.x === paddle.x - 1 &&
    ball.y >= paddle.start &&
    ball.y < paddle.start + paddle.width
  ) {
    reflectFromPaddle();
  }

  if (ball.x === SIZE -1) {
    gameOver = true;
  }
};

const readInput = async() => {
  const buf = new Uint8Array(1);
  const n = await Deno.stdin.read(buf);
  if (n) {
    const key = new TextDecoder().decode(buf).trim().toLowerCase();
    if (key === "a" && paddle.start > 0) paddle.start--;
    if (key === "d" && paddle.start + paddle.width < SIZE) paddle.start++;
  }
}

const main = async() => {
  while (!gameOver) {
    await Promise.race([
      readInput(),
      new Promise(r => setTimeout(r, FRAME_DELAY)),
    ]);
    clearScreen();
    updateBall();
    drawPaddle();
    drawBall();
    render();
  }

  console.clear();
  console.log("💀 Game Over")
  console.log("Final score: ", score);
  Deno.exit(0);
};

await main();