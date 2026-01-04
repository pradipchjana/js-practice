import { assertEquals } from "@std/assert";
import { validBlock, validCol, validRow } from "../src/suduku_validation.js";

Deno.test("Basic sample | valid Row", () => {
  assertEquals(validRow([
  [1,2,3],
  [2,3,1],
  [3,1,2],
],0), true);
})

Deno.test("double none value | valid Row", () => {
  assertEquals(validRow([
  [1,0,0],
  [2,3,1],
  [0,1,2],
],0), true);
})

Deno.test("dublicat value | valid Row", () => {
  assertEquals(validRow([
  [1,2,3],
  [2,1,1],
  [3,1,2],
],1), false);
})

Deno.test("Basic sample | valid col", () => {
  assertEquals(validCol([
  [1,2,3],
  [2,3,1],
  [3,1,2],
],1), true);
})

Deno.test("double none value | valid COl", () => {
  assertEquals(validCol([
  [1,0,0],
  [2,3,1],
  [0,1,2],
],1), true);
})

Deno.test("dublicat value | valid Col", () => {
  assertEquals(validCol([
  [1,2,3],
  [2,1,1],
  [3,1,2],
],1), false);
})

Deno.test("dublicate value | valid Col", () => {
  assertEquals(validCol([
  [1,0,2],
  [2,3,1],
  [0,1,2],
],2), false);
})

Deno.test("simple| valid Block", () => {
  assertEquals(validBlock([
  [1,0,3],
  [2,3,1],
  [0,1,2],
],2), false);
})