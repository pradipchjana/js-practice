function quotient(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  if (divisor === 0) {
    return 0;
  }
  return 1 + quotient(dividend - divisor, divisor);
}

function composeMessage(type, dividend, divisor, result, expected) {
  const isPass = result === expected;
  const checkValue = isPass ? '✅' : '❌';
  const inputSection = "[" + dividend + " " + divisor + "]";
  const actualSection = " Answer: " + result;
  const outputSection = " Expected: " + expected;
  let message = checkValue + " " + type;
  message += isPass ? "" : inputSection;
  message += isPass ? "" : actualSection;
  message += isPass ? "" : outputSection;
  console.log(message);
}

function testQuotient(type, dividend, divisor, expected) {
  const result = quotient(dividend, divisor);
  composeMessage(type, dividend, divisor, result, expected);
}

function testAll() {
  testQuotient("for divideable number ", 6, 2, 3);
  testQuotient("for non divideable number ", 5, 3, 1);
  testQuotient("for non divideable number ", 12, 6, 2);
  testQuotient("for dividend 0 ", 0, 4, 0);
  testQuotient("for diviser 0 ", 4, 0, 1);
}

testAll();