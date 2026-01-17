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

export const boardToString = (board) => {
  let str = "";
  for (let row = 0; row < board.length; row++) {
    str += (8 - row) + "";
    for (let col = 0; col < board[row].length; col++) {
      const piece = board[row][col];
      str += (piece || ".") + " ";
    }
    str += "\n";
  }
  str += "  a b c d e f g h\n";
  return str;
}