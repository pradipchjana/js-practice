
const PIECES = {
  "k": '♚',
  "q": '♛',
  'r': '♜',
  'b': '♝',
  'n': '♞',
  'p': "♟",
  'K': '♔',
  'Q': '♕',
  'R': '♖',
  'B': '♗',
  'N': '♘',
  'P':  '♙'
}

export const createBoard = () => {
  const board = Array.from({ length: 8 }, () => Array(8).fill(null));
  return board;
}

export const getSquare = (board, file, rank) => {
  const col = file.charCodeAt(0) - "a".charCodeAt(0);
  const row = 8 - rank;
  if (row < 0 || row > 7 || col < 0 || col > 7) return null;
  return board[row][col];
}

export const setSquare = (board, file, rank,peice) => {
  const col = file.charCodeAt(0) - "a".charCodeAt(0);
  const row = 8 - rank;
  if (row >= 0 && row < 8 && col >= 0 && col < 8) {
    board[row][col] = peice;
  }
}

export const setUpStartingPosition=()=> {
  const board = createBoard();
  //black
  setSquare(board, "a", 8, 'r');
  setSquare(board, "b", 8, 'n');
  setSquare(board, "c", 8, 'b');
  setSquare(board, "d", 8, 'q');
  setSquare(board, "e", 8, 'k');
  setSquare(board, "f", 8, 'b');
  setSquare(board, "g", 8, 'n');
  setSquare(board, "h", 8, 'r');
  for (const file of 'abcdefgh') {
    setSquare(board, file, 7, 'p');
  }

  //white
  setSquare(board, "a", 1, 'R');
  setSquare(board, "b", 1, 'N');
  setSquare(board, "c", 1, 'B');
  setSquare(board, "d", 1, 'Q');
  setSquare(board, "e", 1, 'K');
  setSquare(board, "f", 1, 'B');
  setSquare(board, "g", 1, 'N');
  setSquare(board, "h", 1, 'R');
  for (const file of 'abcdefgh') {
    setSquare(board, file, 2, 'P');
  }
  return board;
}

export const boardToString = (board) => {
  let str = "";
  const reset = '\x1b[0m';
  const lightSqaure = '\x1b[48;5;240m';
  const darkSquare = '\x1b[48;5;94m';
  const whitePiece = '\x1b[97m';
  const blackPiece = '\x1b[30m';

  for (let row = 0; row < board.length; row++) {
    str += (8 - row) + "";
    for (let col = 0; col < board[row].length; col++) {
      const isLight = (row + col) % 2 === 0;
      const bg = isLight ? lightSqaure : darkSquare;
      const piece = board[row][col];
      const symbol = piece ? PIECES[piece] || piece : ".";
      const fg = piece && piece === piece.toUpperCase() ? whitePiece : blackPiece;
      str += `${bg}${fg} ${symbol} ${reset}`;
    }
    str += "\n";
  }
  str += "  a  b  c  d  e  f  g  h \n";
  return str;
}