import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert/equals";
import { parseMove } from "../src/move.js";

describe("parseMove -> handels common input formates", () => {
  it("for e2e4", () => {
    assertEquals(parseMove("e2e4"),{fromFile: "e", fromRank: 2, toFile: "e",toRank: 4})
  })

  it("for e2 to e4", () => {
    assertEquals(parseMove("e2 to e4"),{fromFile: "e", fromRank: 2, toFile: "e",toRank: 4})
  })

  it("for invalid", () => {
    assertEquals(parseMove("e223e4"),null)
  })
  // it("for e2--e4", () => {
  //   assertEquals(parseMove("e2-e4"),{fromFile: "e", fromRank: 2, toFile: "e",toRank: 4})
  // })
})