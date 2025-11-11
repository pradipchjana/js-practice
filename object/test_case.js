import { isEven } from "./check.js";
import { factorial, SOME_CONSTANT } from "./hardOperation.js";
import { add } from "./operation.js";

console.log(SOME_CONSTANT);

const test = (testCase) => {
  const actual = testCase.funName(...testCase.fnArgs);
  const expectedValue = testCase.expected;
  const isPassed = actual === expectedValue;
  const symbol = isPassed ? "✅" : "❌";
  console.log(`${symbol}---->${testCase.des}`);
  if (!isPassed) {
    console.log(...testCase.fnArgs);
    console.log({ actual, expectedValue });
  }
};

const main = () => {
  const testCase = {
    des: "add 1 and 2",
    funName: add,
    fnArgs: [1, 4],
    expected: 5,
  };
  test(testCase);
};

main();
