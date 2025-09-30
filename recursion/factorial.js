function factorial(number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

function composeMessage(sentence, actual, expected) {
  const checkValue = actual === expected ? '✅' : '❌';
  const actualSection = "Answer: " + actual;
  const inputSection = "[" + sentence + "]";
  const expectedSection = " Expected: " + expected;
  let message = checkValue;
  message += inputSection;
  message += actualSection;
  message += expectedSection;

  console.log(message);

}

function testFactorial(sentence, expected) {
  const result = factorial(sentence);
  composeMessage(sentence, result, expected);
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(4, 24);
}

testAll();
