import { generateLine, generateHollowLine } from "../main.js";

function hollowRectangle(column, row) {
  if (row === 1) {
    return generateLine("*", column);
  }
  const separator = "\n";
  let patternString = generateLine('*', column) + separator;
  for (let rowIndex = 2; rowIndex < row; rowIndex++) {
    patternString += generateHollowLine(' ', column - 2) + separator;
  }
  patternString += generateLine('*', column);
  return patternString;
}