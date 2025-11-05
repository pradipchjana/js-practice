let chessbord = [
  ['br', 'bk', 'bb', 'bq', 'bn', 'bb', 'bk', 'br'],
  ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
  ['wr', 'wk', 'wb', 'wq', 'wn', 'wb', 'wk', 'wr' ],
]

const allElements = [
  "♙ ","♝ ", "♞ ", "♛ ", "♚ ", "♜ ",
  "♙ ","♗ ", "♘ ", "♕ ", "♔ ", "♖ "
];
const namesOfElements = [
  'bp', 'bb', 'bk', 'bq', 'bn', 'br',
  'wp', 'wb', 'wk', 'wq', 'wn', 'wr'
]

function makeBlack(text) {
  return "\x1B[30m" + text + "\x1B[0m";
}

function makeWhite(text) {
  return "\x1B[38m" + text + "\x1B[0m";
}

function findSymbol(value) {
  const symbol = allElements[namesOfElements.indexOf(value)]
  const makeColor = value[0]=== 'b' ? makeBlack(symbol) : makeWhite(symbol);
  return makeColor;
}

function fillWithCharecter(side) {
  let squareSide = [];
  for (let row = 0; row < side; row++) {
    for (let col = 0; col < side; col++) {
      const value = initialBord[row][col]
      const symbol = value === ' ' 
      ? "  " 
      : findSymbol(value);

      const block = (row + col) % 2 
      ? "\x1B[46m"+ symbol + "\x1B[0m" 
      : "\x1B[47m" + symbol + "\x1B[0m";
      squareSide.push(block);
    }
  }
  return squareSide;
}

const game = fillWithCharecter(8);

function showField(side) {
  let result = [];
  for (let index = 0; index < side; index++) {
    result.push((8 - index) + game.slice(index * side, (index + 1) * side).join(''));
  }
  result.push([" ", 'a ', 'b ', 'c ', 'd ', 'e ', 'f ', 'g ', 'h '].join(''));
  console.log(result.join('\n'));
}

function isItOutOfBoard(destX, destY) {
  return destX < 0 || destX > 7 || destY < 0 || destY > 7;
}

function findValidMove(posX, posY) {
  if(chessbord[posX - 1][posY - 1] === ' ' || chessbord[posX - 1][posY + 1] === ' ');
  
}

const validMoveForPawn = function (x, y) {
  
}

function movePawn(posX, posY, destX, destY, color) {
  if (chessbord[destX][destY] !== ' ' && destX === posX) {
    return;
  }
  
}

movePawn()

function paly() {
  const move = prompt("gives your move here:");
}

function main() {
  showField(8);
}

main();

