function nthFibonacciTerm(term) {
  // Implement code here
  if (term === 1) {
    return 0;
  }
  if (term === 2) {
    return 1;
  }
  return nthFibonacciTerm(term - 1) + nthFibonacciTerm(term - 2);
}

function composeMessage(type, term, result, expected) {
  const isPass = result === expected;
  const checkValue = isPass ? '✅' : '❌';
  const inputSection = "\n[" + term + "]";
  const actualSection = "\nAnswer: " + result;
  const outputSection = " \nExpected: " + expected;
  let message = checkValue + " " + type;
  message += isPass ? "" : inputSection;
  message += isPass ? "" : actualSection;
  message += isPass ? "" : outputSection;
  console.log(message);
}

function testNthFibonacciTerm(type, term, expected) {
  const result = nthFibonacciTerm(term);
  composeMessage(type, term, result, expected);
}

function testAll() {
  testNthFibonacciTerm("1st position", 1, 0);
  testNthFibonacciTerm("2nd position", 2, 1);
  testNthFibonacciTerm("3rd position", 3, 1);
  testNthFibonacciTerm("4th position", 4, 2);
  testNthFibonacciTerm("5th position", 5, 3);
  testNthFibonacciTerm("6th position", 6, 5);
  testNthFibonacciTerm("7th position", 7, 8);
  testNthFibonacciTerm("8th position", 8, 13);
}

testAll();