import { assertEquals } from "@std/assert";
import { validRow } from "../src/suduku_validation.js";

Deno.test("Basic sample | valid Row", () => {
  assertEquals(validRow([0, 3, 2, 1, 4],3), true);
})

Deno.test("double none value | valid Row", () => {
  assertEquals(validRow([0, 3, 0, 1, 4],3), true);
})

Deno.test("dublicat value | valid Row", () => {
  assertEquals(validRow([0, 3, 0, 1, 3],3), false);
})

Deno.test("no Value Present| valid row", () => {
  assertEquals(validRow([0, 0, 0, 0, 0], 3), true);
})