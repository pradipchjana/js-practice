


const test = (testCase) => {
  const actual = testCase.funName(...testCase.fnArgs);
  const expectedValue = testCase.expected;
  const isPassed = actual === expectedValue;
  const symbol = isPassed ?"✅" : "❌";
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
