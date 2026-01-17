import { assertEquals } from "@std/assert";
import {
  validBlock,
  validCol,
  validGrid,
  validRow,
} from "../src/suduku_validation.js";

Deno.test("Basic sample | valid Row", () => {
  assertEquals(
    validRow([
      [1, 2, 3],
      [2, 3, 1],
      [3, 1, 2],
    ], 0),
    true,
  );
});

Deno.test("double none value | valid Row", () => {
  assertEquals(
    validRow([
      [1, 0, 0],
      [2, 3, 1],
      [0, 1, 2],
    ], 0),
    true,
  );
});

Deno.test("dublicat value | valid Row", () => {
  assertEquals(
    validRow([
      [1, 2, 3],
      [2, 1, 1],
      [3, 1, 2],
    ], 1),
    false,
  );
});

Deno.test("Basic sample | valid col", () => {
  assertEquals(
    validCol([
      [1, 2, 3],
      [2, 3, 1],
      [3, 1, 2],
    ], 1),
    true,
  );
});

Deno.test("double none value | valid COl", () => {
  assertEquals(
    validCol([
      [1, 0, 0],
      [2, 3, 1],
      [0, 1, 2],
    ], 1),
    true,
  );
});

Deno.test("dublicat value | valid Col", () => {
  assertEquals(
    validCol([
      [1, 2, 3],
      [2, 1, 1],
      [3, 1, 2],
    ], 1),
    false,
  );
});

Deno.test("dublicate value | valid Col", () => {
  assertEquals(
    validCol([
      [1, 0, 2],
      [2, 3, 1],
      [0, 1, 2],
    ], 2),
    false,
  );
});
  
Deno.test("valid first block| valid Block", () => {
  assertEquals(
    validBlock(
      [
        [1, 0, 3, 1],
        [2, 3, 1, 2],
        [0, 1, 2, 0],
        [0, 1, 4, 3],
      ],
      0,
      1,
      2,
    ),
    true,
  );
});

Deno.test("second block invalid| valid Block", () => {
  assertEquals(
    validBlock(
      [
        [1, 0, 3, 1],
        [2, 3, 1, 2],
        [0, 1, 2, 0],
        [0, 1, 4, 3],
      ],
      0,
      2,
      2,
    ),
    false,
  );
});

Deno.test("third block invalid| valid Block", () => {
  assertEquals(
    validBlock(
      [
        [1, 0, 3, 1],
        [2, 3, 1, 2],
        [0, 1, 2, 0],
        [0, 1, 4, 3],
      ],
      2,
      0,
      2,
    ),
    false,
  );
});

Deno.test("second block invalid| valid Block", () => {
  assertEquals(
    validBlock(
      [
        [1, 0, 3, 1],
        [2, 3, 1, 2],
        [0, 1, 2, 0],
        [0, 1, 4, 3],
      ],
      2,
      2,
      2,
    ),
    true,
  );
});

Deno.test("Invalid Grid| valid Grid", () => {
  assertEquals(
    validGrid(
      [
        [1, 0, 3, 1],
        [2, 3, 1, 2],
        [0, 1, 2, 0],
        [0, 1, 4, 3],
      ],
      2,
    ),
    false,
  );
});

Deno.test("valid Grid| valid Grid", () => {
  assertEquals(
    validGrid(
      [
        [1, 0, 3, 0],
        [0, 3, 1, 2],
        [0, 0, 2, 0],
        [0, 1, 4, 3],
      ],
      2,
    ),
    true,
  );
});

Deno.test("valid Grid 9X9| valid Grid", () => {
  assertEquals(
    validGrid(
      [
        [0, 5, 8, 0, 3, 0, 0, 2, 0],
        [4, 0, 2, 0, 0, 0, 9, 0, 5],
        [0, 0, 7, 0, 0, 0, 6, 8, 0],
        [2, 9, 0, 0, 5, 4, 0, 7, 0],
        [5, 0, 0, 0, 6, 2, 0, 0, 0],
        [0, 0, 3, 8, 1, 0, 2, 5, 0],
        [1, 0, 9, 0, 0, 3, 0, 6, 4],
        [8, 6, 5, 4, 9, 0, 1, 3, 0],
        [0, 7, 0, 0, 0, 6, 0, 0, 0],
      ],
      3,
    ),
    true,
  );
});
