import { createBoard, setSquare,getSquare } from "../src/board.js";
import { assertEquals } from "@std/assert";
import { beforeEach, describe, it } from "@std/testing/bdd";

describe("test create board | create a 8*8 grid filled with null", () => {
  const board = createBoard();
  it("check the row length is 8", () => {
    assertEquals(board.length, 8);
  });
  it("check the colums length is 8", () => {
    assertEquals(board[0].length, 8);
  });

  it("check first element is null", () => {
    assertEquals(board[0][0], null);
  });
  it("check last element is null", () => {
    assertEquals(board[7][7], null);
  });
});

describe("test getSquare and setSquare", () => {
  const board = createBoard();
  beforeEach(() => {
    setSquare(board, "e", 4, "♙");
    setSquare(board, "d", 5, "♟");
  })
  it("check sucessfully set 8", () => {
    assertEquals(getSquare(board,"e",4),"♙");
  });

  it("check try to fetch null value| out of boundary", () => {
    assertEquals(getSquare(board,"w",4), null);
  });
});