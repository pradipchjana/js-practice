function sumOfAP(first, difference, end) {
  if (end === 0) {
    return 0;
  }
  return first + sumOfAP(first + difference, difference, end - 1);
}

function composeMessage(type, first, difference, end, result, expected) {
  const isPass = result === expected;
  const checkValue = isPass ? '✅' : '❌';
  const inputSection = "\n[" + first + " " + difference + ' ' + end + "]";
  const actualSection = "\nAnswer: " + result;
  const outputSection = " \nExpected: " + expected;
  let message = checkValue + " " + type;
  message += isPass ? "" : inputSection;
  message += isPass ? "" : actualSection;
  message += isPass ? "" : outputSection;
  console.log(message);
}

function testSumOfAP(type, first, difference, end, expected) {
  const result = sumOfAP(first, difference, end);
  composeMessage(type, first, difference, end, result, expected);
}

function testAll() {
  testSumOfAP("valid 1digit number", 2, 3, 4, 26);
  testSumOfAP("Two digit number", 10, 20, 30, 9000);
  testSumOfAP("Positive AP with negative difference", 10, -2, 4, 28);
  testSumOfAP('Negative AP with negative difference', -5, -3, 3, -24);
  testSumOfAP('Negative AP with positive difference', -10, 4, 5, -10);
  testSumOfAP('AP with zero common difference', 7, 0, 3, 21);
  testSumOfAP('Single-term AP', 5, 10, 1, 5);
  testSumOfAP('Zero first term', 0, 5, 4, 30);
}

testAll();
