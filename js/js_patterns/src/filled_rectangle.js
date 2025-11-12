import { generateLine } from "../main.js";

export function rectanglePattern(column, row) {
  let patternString = '';
  if (column === 0 || row === 0) return patternString;
  let separator = "";
  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    patternString += separator + generateLine('*', column);
    separator += '\n';
  }
  return patternString;
}
