import { has5, isEven } from "./check.js";
import { factorial, SOME_CONSTANT, SOME_ALPHABET } from "./hardOperation.js";
import { add } from "./operation.js";

const dbg = x => {
  console.log(x);
  return x;
}

const testCase = [
  {
    des: "add 1 and 2",
    funName: add,
    fnArgs: [1, 4],
    expected: 5,
  },
  {
    des: "isEven 5",
    funName: isEven,
    fnArgs: [5],
    expected: false,
  },
  {
    des: "isEven 5",
    funName: factorial,
    fnArgs: [5],
    expected: 120,
  },
    {
    des: "add 1 and 2",
    funName: has5,
    fnArgs: [5,[1, 2, 3, 4]],
    expected: false,
  },
];

const test = (testCase) => {
  const actual = testCase.funName(...testCase.fnArgs);
  const expectedValue = testCase.expected;
  const isPassed = actual === expectedValue;
  const symbol = isPassed ? "✅" : "❌";
  console.log(`${symbol} ----> ${testCase.des}`);
  if (!isPassed) {
    console.log(...testCase.fnArgs);
    console.log({ actual, expectedValue });
  }
};

const main = () => {
  for (const tests of testCase) {
    test(tests);
  }
};

main();
