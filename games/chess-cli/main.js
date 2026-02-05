import {
  boardToString,
  createBoard,
  setUpStartingPosition,
} from "./src/board.js";
import { parseMove, validateAndMove } from "./src/move.js";

const main = async () => {
  const board = setUpStartingPosition();
  let whiteTurn = true;

  console.log(boardToString(board));
  console.log("enter a move (e.g e2e4 , e2 to e4) or q to quite");
  console.log(`White's turn (uppercase pieces)`);

  const decoder = new TextDecoder();
  for await (const chunk of Deno.stdin.readable) {
    const input = decoder.decode(chunk).trim();

    if (input.toLowerCase() === "q") {
      console.log("GoodBye");
      break;
    }

    if (!input) continue;

    const move = parseMove(input);
    if (!move) {
      console.log("Invalid format: try e2e4 or e2 to e4");
      continue;
    }

    const result = validateAndMove(board, move, whiteTurn);
    
    console.clear();
    console.log(boardToString(board));

    if (result.success) {
      const captureMsg = result.captured ? `(captured ${result.captured})` : "";
      console.log(`Moved ${result.movedPiece} from ${move.fromFile}${move.fromRank} to ${move.toFile}${move.toRank}${captureMsg}`);
      whiteTurn = !whiteTurn;
      console.log(`${whiteTurn ? "White" : "Black"}'s turn`);
    } else {
      console.log(`Error ${result.error}`);
    }
    console.log("\nNext move or 'q' for quite");
  }
};

main();
