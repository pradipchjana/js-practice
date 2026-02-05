const board = Array(9).fill(" ");
const HUMAN = "X";
const BOT = "O";
const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];
const isWin=(player)=> {
  return WIN_PATTERNS.some(pattern =>
    pattern.every(i => board[i] === player)
  );
}

const isDraw = () => {
  return board.every(cell => cell !== " ");
}

const getAvilableMoves = () => {
  return board.map((v, i) => (v === " " ? i : null)).filter(v => v !== null);
}

const showBoard=() =>{
  let output = "";
  board.forEach((cell,i) => {
    if (i % 3 === 0 && !i == 0) output += "\n";
    output += `|${cell}|`;
  });
  console.log(output);
}

const minmax = (isMaximizing) => {
  if (isWin(BOT)) return 1;
  if (isWin(HUMAN)) return -1;
  if (isDraw()) return 0;
  const scores = [];

  for (const move of getAvilableMoves()) {
    board[move] = isMaximizing ? BOT : HUMAN;
    scores.push(minmax(!isMaximizing));
    board[move] = ' ';
  }
  return isMaximizing ? Math.max(...scores) : Math.min(...scores);
}

function bestBotMove() {
  let bestScore = -Infinity;
  let nextMove;

  for (const move of getAvilableMoves()) {
    board[move] = BOT;
    const score = minmax(false);
    board[move] = " ";
    if (score> bestScore) {
      bestScore = score;
      nextMove = move;
    }
  }
  return nextMove;
}

const humanTurn = () => {
  const input = parseInt(prompt("Enter position(1-9):")) - 1;
  if (!getAvilableMoves().includes(input)) {
    console.log("Invalid move,try again");
    return humanTurn();
  }
  board[input] = HUMAN;
}

const botTurn = () => {
  const move = bestBotMove();
  board[move] = BOT;
  console.log("Bot played at position",move+1);
}

function play() {
  console.log("You Need to give your position like that");
  const table = `
---------
|1||2||3|
|4||5||6|
|7||8||9|
---------
You are X and BOT is O`;
  console.log(table);
  while (true) {  
    showBoard();
    humanTurn();
    if (isWin(HUMAN)) {
      showBoard();
      console.log("You win");
      break;
    }
    if (isDraw()) {
      showBoard();
      console.log("Game draw");
      break;
    }
    botTurn();
    if (isWin(BOT)) {
      showBoard();
      console.log("Bot win");
      break;
    }
  }
}

play();

