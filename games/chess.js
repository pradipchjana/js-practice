let chessboard = [
    ['b♜', 'b♞', 'b♝', 'b♛', 'b♚', 'b♝', 'b♞', 'b♜'],
    ['b♟', 'b♟', 'b♟', 'b♟', 'b♟', 'b♟', 'b♟', 'b♟'],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ['w♙', 'w♙', 'w♙', 'w♙', 'w♙', 'w♙', 'w♙', 'w♙'],
    ['w♖', 'w♘', 'w♗', 'w♕', 'w♔', 'w♗', 'w♘', 'w♖'],
  ]
  
//   const allElements = [
//     "♙ ","♝ ", "♞ ", "♛ ", "♚ ", "♜ ",
//     "♙ ","♗ ", "♘ ", "♕ ", "♔ ", "♖ "
//   ];
//   const namesOfElements = [
//     'bp', 'bb', 'bk', 'bq', 'bn', 'br',
//     'wp', 'wb', 'wk', 'wq', 'wn', 'wr'
//   ]
  
  function makeBlack(text) {
    return "\x1B[30m" + text + "\x1B[0m";
  }
  
  function makeWhite(text) {
    return "\x1B[35m" + text + "\x1B[0m";
  }
  
  function findSymbol(value) {
    if (value === " ") return "  ";
    const color = value[0] === 'b' ? makeBlack(value[1] + ' ') : makeWhite(value[1] + ' ');
    return color;
  }
  

  function renderBoard() {
    let output = '';
    for (let row = 0; row < 8; row++) {
      output += (8 - row) + ' ';
      for (let col = 0; col < 8; col++) {
        const symbol = findSymbol(chessboard[row][col]);
        const background = (row + col) % 2 === 0 ? "\x1B[47m" : "\x1B[46m";
        output += background + symbol + "\x1B[0m";
      }
      output += '\n';
    }
    output += '  a b c d e f g h\n';
    console.log(output);
  }
  
  function isItOutOfBoard(destX, destY) {
    return destX < 0 || destX > 7 || destY < 0 || destY > 7;
  }
  
  function findValidMove(posX, posY) {
    if(chessboard[posX - 1][posY - 1] === ' ' || chessboard[posX - 1][posY + 1] === ' ');
    
  }
  
  const validMoveForPawn = function (x, y) {
    
  }
  
  function movePawn(posX, posY, destX, destY, color) {
    if (chessboard[destX][destY] !== ' ' && destX === posX) {
      return;
    }
    
  }
  
  
  
  function paly() {
    const move = prompt("gives your move here:");
  }
  
  function main() {
    renderBoard();
  }
  
  main();
  
