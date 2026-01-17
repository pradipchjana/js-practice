import { boardToString, createBoard, setUpStartingPosition } from "./src/board.js";

const main = () => {
  const board = setUpStartingPosition();;
  
  console.log(boardToString(board));
}

main();