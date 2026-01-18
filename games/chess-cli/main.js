import { boardToString, createBoard, setUpStartingPosition } from "./src/board.js";
import { parseMove, trySimpleMove } from "./src/move.js";

const main = async() => {
  const board = setUpStartingPosition();;
  console.log(boardToString(board));
  console.log("enter a move (e.g e2e4 , e2 to e4) or q to quite");
  const decoder = new TextDecoder();
  for await(const chunk of Deno.stdin.readable) {
    const input = decoder.decode(chunk).trim();

    if (input.toLowerCase() === 'q') {
      console.log("GoodBye");
      break;
    }

    if (!input) continue;

    const move = parseMove(input);
    if (!move) {
      console.log("Invalid format: try e2e4 or e2 to e4");
      continue;
    }

    const result = trySimpleMove(board, move);
    console.clear();
    console.log(boardToString(board));
    if (result.success) {
      console.log(`Moved${result.movedPiece} from ${move.fromFile,move.fromRank} to ${move.toFile,move.toRank}`)
    } else {
      console.log(`Error ${result.error}`)
    }
    console.log("\nNext move or 'q' for quite");
  }
}

main();