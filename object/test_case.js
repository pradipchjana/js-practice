const add = (a, b) => {
  return a + b;
};

const test = (testCase) => {
  const actual = testCase.funName(...testCase.fnArgs);
  const expectedValue = testCase.expected;
  console.log({ actual, expectedValue });
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
