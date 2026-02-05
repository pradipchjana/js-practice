import { beforeEach, describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert/equals";
import { parseMove, validateAndMove } from "../src/move.js";
import { createBoard, setSquare } from "../src/board.js";

describe("parseMove -> handels common input formates", () => {
  it("for e2e4", () => {
    assertEquals(parseMove("e2e4"), {
      fromFile: "e",
      fromRank: 2,
      toFile: "e",
      toRank: 4,
    });
  });

  it("for e2 to e4", () => {
    assertEquals(parseMove("e2 to e4"), {
      fromFile: "e",
      fromRank: 2,
      toFile: "e",
      toRank: 4,
    });
  });

  it("for invalid", () => {
    assertEquals(parseMove("e223e4"), null);
  });
  // it("for e2--e4", () => {
  //   assertEquals(parseMove("e2-e4"),{fromFile: "e", fromRank: 2, toFile: "e",toRank: 4})
  // })
});

describe("trysimplemove", () => {
  const board = createBoard();
  it("moves piece when target empty", () => {
    setSquare(board, "e", 2, "p");
    const move = parseMove("e2e4");
    const result = validateAndMove(board, move);
    assertEquals(result, { success: true, movedPiece: "p" });
  });

  it("moves piece when target blocked", () => {
    setSquare(board, "e", 2, "p");
    setSquare(board, "e", 4, "P");
    const move = parseMove("e2e4");
    const result = validateAndMove(board, move);
    assertEquals(result, { success: false, error: "Target e4 is not empty" });
  });
});
