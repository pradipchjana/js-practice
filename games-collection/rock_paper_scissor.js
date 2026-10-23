const ROCK = 'rock';
const PAPER = 'paper';
const SCISSOR = 'scissor';

const moves = [ROCK, PAPER, SCISSOR];
const movesForWinnin = [SCISSOR, ROCK, PAPER];

function bgRed(text) {
  return "\x1B[41m" + text + "\x1B[0m";
}

function isWon(move, opponentMove) {
  return movesForWinnin[moves.indexOf(move)] === opponentMove;
}

function isDraw(move, opponentMove) {
  return move === opponentMove;
}

function calculateResult(move, opponentMove) {
  return [
    isDraw(move, opponentMove),
    isWon(move, opponentMove),
  ];
}

function play() {
  const move = moves[Math.floor(Math.random() * 3)];
  const opponentMove = prompt(bgRed("Enter your choice:(Rock/Paper/scissor)"));
  const result = isDraw(move, opponentMove) ? "DRAW" : isWon(move, opponentMove) ? "WON" : "LOST";
  console.log(result);
}
play();
