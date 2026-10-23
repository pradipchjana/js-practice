function sumOfDigits(number) {
  if(number === 0){
    return 0;
  }
  return number + sumOfDigits(number - 1);
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

function testSumOfDigits(sentence, expected) {
  const result = sumOfDigits(sentence);
  composeMessage(sentence, result, expected);
}

function testAll() {
  testSumOfDigits(0, 0);
  testSumOfDigits(1, 1);
  testSumOfDigits(2, 3);
  testSumOfDigits(3, 6);
  testSumOfDigits(4, 10);
  testSumOfDigits(5, 15);
  testSumOfDigits(6, 21);
  testSumOfDigits(7, 28);
  testSumOfDigits(8, 36);
  testSumOfDigits(9, 45);
  testSumOfDigits(10, 55);

}

testAll();
