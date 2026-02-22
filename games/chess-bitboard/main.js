import { Board } from "./src/board.js";
import { toAlgebraic } from "./src/util.js";

const main = () => {
  const board = new Board();
  // while (true) {
    // console.clear();
    board.print();
  // const color = board.state.turn === 'w' ? "White" : "Black";
  board.state.turn = 'b';
  board.state.pieces.n = 0x0000000010000000n;
    const pawnMoves = board.generateKnightMoves();

    pawnMoves.forEach(move => {
      const fromAlg = toAlgebraic(move.from);
      const toAlg = toAlgebraic(move.to);
      console.log(fromAlg, "->", toAlg);
    })
    console.log(pawnMoves.length);
  // }
}

main();