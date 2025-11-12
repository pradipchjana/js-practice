function findColum(number, column, chars = ['*', '-']) {
  return chars[number % chars.length].repeat(column);
}

export function generateLine(char, column) {
  return char.repeat(column);
}

function generateHollowLine(char, column) {
  return '*' + char.repeat(column) + '*';
}

function hollowRectangle(column, row) {
  if (row === 1) {
    return generateLine("*", column);
  }
  let separator = "\n";
  let patternString = generateLine('*', column) + separator;
  for (let rowIndex = 2; rowIndex < row; rowIndex++) {
    patternString += generateHollowLine(' ', column - 2) + separator;
  }
  patternString += generateLine('*', column);
  return patternString;
}

function alternatingRectangle(column, row) {
  let patternString = '*'.repeat(column);
  for (let rowIndex = 1; rowIndex < row; rowIndex++) {
    patternString += '\n' + findColum(rowIndex, column);
  }
  return patternString;
}

function spacedAlternatingRectangle(column, row) {
  const symbols = [' ', '*', '-'];
  let patternString = "*".repeat(column);
  for (let rowIndex = 2; rowIndex <= row; rowIndex++) {
    patternString += "\n" + findColum(rowIndex, column, symbols);
  }
  return patternString;
}

function findTrianglePattern(row) {
  let starString = "*";
  let patternString = starString;
  for (let rowIndex = 2; rowIndex <= row; rowIndex++) {
    patternString += '\n' + "*".repeat(rowIndex);
  }
  return patternString;
}

function findReverseTriangle(row) {
  let patternString = " ".repeat(row - 1) + "*";
  if (row === 1) {
    return "*";
  }
  for (let rowIndex = 2; rowIndex <= row; rowIndex++) {
    patternString += "\n" + " ".repeat(row - rowIndex) + "*".repeat(rowIndex);
  }
  return patternString;
}

function findLineForDiamond(total, lineNumber) {
  return total - Math.abs((total - 1) - (2 * lineNumber));
}

function findDiamond(row) {
  const highestLine = (row % 2) + (row - 1);
  let patternString = '';
  let separator = '';
  for (let index = 0; index < highestLine; index++) {
    const lines = findLineForDiamond(highestLine, index);
    patternString += separator
    patternString += generateLine(' ', (highestLine - lines) / 2);
    patternString += generateLine('*', lines);
    separator = '\n';
  }
  return patternString;
}

function generatePattern(style, dimensions) {
  if (dimensions[0] === 0 || dimensions[1] === 0) {
    return '';
  }
  return style(...dimensions);
}

function composeMessage(type, sentence, delimiter, result, expected) {
  const isPass = result === expected;
  const checkValue = isPass ? '✅' : '❌';
  const inputSection = "\n[" + sentence + " || " + delimiter + "]";
  const actualSection = "\n Answer:\n" + result;
  const outputSection = "\n Expected:\n" + expected;
  let message = checkValue + " " + type;
  message += isPass ? "" : inputSection;
  message += isPass ? "" : actualSection;
  message += isPass ? "" : outputSection;
  console.log(message);
}

export function testGeneratePattern(type, style, delimiter, expected) {
  const result = generatePattern(style, delimiter);
  composeMessage(type, sentence, delimiter, result, expected);
}

