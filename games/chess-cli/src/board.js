export const createBoard = () => {
  const board = Array.from({ length: 8 }, () => Array(8).fill(null));
  return board;
}