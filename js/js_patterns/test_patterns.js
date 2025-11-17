import { testGeneratePattern, rectanglePattern } from "./main.js";

testGeneratePattern("1 row 1 column", rectanglePattern, [1, 1], '*');


const testHollowRectangle = [
    {
    desc: "1 row 1 column",
    style: "hollow-rectangle",
    args: [1, 1],
    expected: '*' 
    },
    {
    desc: "3 row 3 column",
    style: "hollow-rectangle",
    args: [3, 3],
    expected: '***\n* *\n***' 
    },
    {
    desc: "5 row 5 column",
    style: "hollow-rectangle",
    args: [3, 3],
    expected: '***\n* *\n***'
    },
    {
    desc: "hollow-rectangle",
    style: "hollow-rectangle",
    args: [5, 5],
    expected: '*****\n*   *\n*   *\n*   *\n*****',
    }
  ]

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

main();
