import { createBoard } from "../src/board.js";
import { assertEquals } from "@std/assert";
import { describe,it,beforeEach } from "@std/testing/bdd";
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