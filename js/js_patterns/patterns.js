function findColum(number, column, chars = ['*', '-']) {
  return chars[number % chars.length].repeat(column);
}

function generateLine(char, column) {
  return char.repeat(column);
}

function generateHollowLine(char, column) {
  return '*' + char.repeat(column) + '*';
}

function rectanglePattern(column, row) {
  let patternString = '';
  let separator = "";
  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    patternString += separator + generateLine('*', column);
    separator += '\n';
  }
  return patternString;
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
  switch (style) {
    case 'filled-rectangle':
      return rectanglePattern(dimensions[0], dimensions[1]);
    case "hollow-rectangle":
      return hollowRectangle(dimensions[0], dimensions[1]);
    case "alternating-rectangle":
      return alternatingRectangle(dimensions[0], dimensions[1]);
    case "spaced-alternating-rectangle":
      return spacedAlternatingRectangle(dimensions[0], dimensions[1]);
    case "triangle":
      return findTrianglePattern(dimensions[0]);
    case "right-aligned-triangle":
      return findReverseTriangle(dimensions[0]);
    case "diamond":
      return findDiamond(dimensions[0]);
    default:
      return '';
  }
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

function testGeneratePattern(type, sentence, delimiter, expected) {
  const result = generatePattern(sentence, delimiter);
  composeMessage(type, sentence, delimiter, result, expected);
}

function testRectanglePattern() {
  console.log("\ntestRectanglePattern\n");

  testGeneratePattern("1 row 1 column", "filled-rectangle", [1, 1], '*');
  testGeneratePattern("2 column 1 row", "filled-rectangle", [2, 1], '**');
  testGeneratePattern("1 column 2 row", "filled-rectangle", [1, 2], '*\n*');
  testGeneratePattern("2 row 2 column", "filled-rectangle", [2, 2], '**\n**');
  testGeneratePattern("5 row 0 column", "filled-rectangle", [0, 5], '');
  testGeneratePattern("0 row 5 column", "filled-rectangle", [5, 0], '');
}

function testHollowRectangle() {
  console.log("\nHollow-Rectangle\n");

  testGeneratePattern("1 row 1 column", "hollow-rectangle", [1, 1], '*');
  testGeneratePattern("3 row 3 column",
    "hollow-rectangle",
    [3, 3],
    '***\n* *\n***');
  testGeneratePattern("5 row 5 column",
    "hollow-rectangle",
    [5, 5],
    '*****\n*   *\n*   *\n*   *\n*****');

}

function testAlternatingRectangle() {
  console.log('\nAlternatingRectangle\n');
  testGeneratePattern("5 column 4 row",
    "alternating-rectangle",
    [5, 4],
    "*****\n-----\n*****\n-----");
  testGeneratePattern("3 column 3 row",
    "alternating-rectangle",
    [3, 3],
    "***\n---\n***");
  testGeneratePattern("6 column 2 row",
    "alternating-rectangle",
    [6, 2],
    "******\n------");
}

function testSpacedAlternatingRectangle() {
  console.log('\nSpacedAlternatingRectangle\n');
  testGeneratePattern("5 rows 6 columns",
    "spaced-alternating-rectangle",
    [6, 5],
    "******\n------\n      \n******\n------");
  testGeneratePattern("3 rows 4 columns",
    "spaced-alternating-rectangle",
    [4, 3],
    "****\n----\n    ");
}

function testTriangle() {
  console.log("\ntestTriangle\n");
  testGeneratePattern("for 1", "triangle", [1], '*');
  testGeneratePattern("for 2", "triangle", [2], '*\n**');
  testGeneratePattern("for 3", "triangle", [3], '*\n**\n***');
  testGeneratePattern("for 4", "triangle", [4], '*\n**\n***\n****');

}

function testReverseTriangle() {
  console.log('\nReversedTriangle\n');
  testGeneratePattern("for 1", "right-aligned-triangle", [1], '*');
  testGeneratePattern("for 2", "right-aligned-triangle", [2], ' *\n**');
  testGeneratePattern("for 3", "right-aligned-triangle", [3], '  *\n **\n***');
}

function testDiamond() {
  console.log('\nDiamond\n');
  testGeneratePattern("For 5", 'diamond', [5], '  *\n ***\n*****\n ***\n  *');
}

function testAll() {
  testRectanglePattern();
  testHollowRectangle();
  testAlternatingRectangle();
  testSpacedAlternatingRectangle();
  testTriangle();
  testReverseTriangle();
  testDiamond();
}

testAll();