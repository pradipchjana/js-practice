import { rectanglePattern } from "../src/filled_rectangle.js";
import { assertEquals } from "@std/assert";

const testFilledRectangleData = [
    {
    desc: "1 row 1 column",
    style: "filled-rectangle",
    args: [1, 1],
    expected: '*'
  },
  {
    desc: "2 column 1 row",
    style: "filled-rectangle",
    args: [2, 1],
    expected: '**'
    },
    {
    desc: "1 column 2 row",
    style: "filled-rectangle",
    args: [1, 2],
    expected: '*\n*'
    },
    {
    desc: "2 row 2 column",
    style: "filled-rectangle",
    args: [2, 2],
    expected: '**\n**'
    },
    {
    desc: "5 row 0 column",
    style: "filled-rectangle",
    args: [5, 0],
    expected: '' 
    },
    {
    desc: "0 row 5 column",
    style: "filled-rectangle",
    args: [0, 5],
    expected: '' 
    }
]
  
const testFilledRectangle = testCase => {
  Deno.test({
 name: `${testCase.style}| ${testCase.desc}`,
 fn() {
   assertEquals(rectanglePattern(...testCase.args), testCase.expected);
 },
});
}

// test(testFilledRectangleData[0])

const main = () => {
  for (const key of testFilledRectangleData) {
    testFilledRectangle(key);
  }
}

main();
