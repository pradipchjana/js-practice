function remainder(dividend, divisor) {

  if (dividend < divisor) {
    return dividend;
  }

  if (divisor === 0) {
    return 0;
  }

  return remainder(dividend - divisor, divisor);
}

function composeMessage(dividend, divisor, result, expected) {
  const checkValue = result === expected ? '✅' : '❌';
  const inputSection = "[" + dividend + " " + divisor + "]";
  const actualSection = " Answer: " + result;
  const outputSection = " Expected: " + expected;
  let message = checkValue;
  message += inputSection;
  message += actualSection;
  message += outputSection;
  console.log(message);
}

function testRemainder(dividend, divisor, expected) {
  const result = remainder(dividend, divisor);
  composeMessage(dividend, divisor, result, expected);
}

function testAll() {
  testRemainder(6, 2, 0);
  testRemainder(15, 6, 3);
  testRemainder(0, 2, 0);
  testRemainder(2, 0, 0);
}

testAll();