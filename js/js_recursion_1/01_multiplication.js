function multiply(multiplier, multiplicand) {

  if (multiplier === 1) {
    return multiplicand;
  }

  if (multiplier === 0) {
    return 0;
  }

  return multiplicand + multiply(multiplier - 1, multiplicand);
}

function composeMessage(type, multiplier, multiplicand, result, expected) {
  const checkValue = result === expected ? '✅' : '❌';
  const inputSection = "[" + multiplier + " " + multiplicand + "]";
  const actualSection = " Answer: " + result;
  const outputSection = " Expected: " + expected;
  let message = checkValue;
  message += inputSection;
  message += actualSection;
  message += outputSection;
  console.log(message);
}

function testMultiply(type, multiplier, multiplicand, expected) {
  const result = multiply(multiplier, multiplicand);
  composeMessage(type, multiplier, multiplicand, result, expected);
}

function testAll() {
  testMultiply('For all number', 2, 3, 6);
  testMultiply('For multiplier 0', 0, 1, 0);
  testMultiply('For multiplicand 0', 1, 0, 0);
  testMultiply("For multiplicand 0", 2, 0, 0);
}

testAll();