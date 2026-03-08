import Sudoku from "./src/engine/sudoku.js";

const gen = new Sudoku();

const { puzzle, solution } = gen.generate("medium");
// gen.print(puzzle)
// console.log("lop");

// gen.print(solution)
