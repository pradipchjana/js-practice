const HIGHT = 20;
const WIDTH = 40;
const FRAME_DELAY = 200;

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const DIRECTIONS = {
  w: { x: 0, y: -1, name: "NORTH" },
  s: { x: 0, y: 1, name: "SOUTH" },
  a: { x: -1, y: 0, name: "WEST" },
  d: { x: 1, y: 0, name: "EAST" },
};

const snake = [
  { x: 6, y: 6 },
  { x: 5, y: 6 },
  { x: 4, y: 6 }
];

const isWall = ({ x, y }) => {
  return x === 0 || y === 0 || x === WIDTH - 1 || y === HIGHT - 1;
}

const isOnSnake = ({ x, y }) => {
  return snake.some(seg => seg.x === x && seg.y === y);
}

const spawnFood = () => {
  let pos = { x: generateRandomNumber(WIDTH), y: generateRandomNumber(HIGHT) };
  while (isWall(pos) || isOnSnake(pos)) {
    pos = { x: generateRandomNumber(WIDTH), y: generateRandomNumber(HIGHT) };
  }
  return pos;
}

let food = spawnFood();
let score = 0;
let direction = "d";
let gameOver = false;

function render() {
  console.clear();
  for (let y = 0; y < HIGHT; y++) {
    let row = "";

    for (let x = 0; x < WIDTH; x++) {
      if (isWall({ x, y })) {
        row += "🟩";
      } else if (x === food.x && y === food.y) {
        row += "🐰";
      } else {
        const index = snake.findIndex(s => s.x === x && s.y === y);
        if (index === 0) row += "🐲";
        else if (index > 0) row += "🦠";
        else row += "  ";
      }
    }
    console.log(row);
  }
  console.log("Score: ",score);
}

const updateSnake = () => {
  const head = snake[0];
  const move = DIRECTIONS[direction];
  const newHead = { x: head.x + move.x, y: head.y + move.y };

  if (isWall(newHead) || isOnSnake(newHead)) {
    gameOver = true;
    return;
  }

  snake.unshift(newHead);

  if (newHead.x === food.x && newHead.y === food.y) {
    score++;
    food = spawnFood();
  } else {
    snake.pop();
  }
}

const readInput = async() => {
  const buf = new Uint8Array(1);
  const n = await Deno.stdin.read(buf);
  if (n) {
    const key = new TextDecoder().decode(buf).trim();
    if (DIRECTIONS[key]) direction = key;
  }
}

const main= async()=> {
  render();

  while (!gameOver) {
    await Promise.race([
      readInput(),
      new Promise(r => setTimeout(r, FRAME_DELAY)),
    ]);

    updateSnake();
    render();
  }
  console.clear();
  console.log("💀 Game Over");
  console.log("Final Score: ", score);
  Deno.exit(0);
}

main();