function primeCheck(numberOfSteps) {
  let currentTerm = 0;
  let nextTerm = 1;
  
  for (let count = 1; count < numberOfSteps; count++) {
    nextTerm = currentTerm + nextTerm;
    currentTerm = nextTerm - currentTerm;
  }
  return currentTerm;
}

function testPrime(decimalNumber, expextedValue) {
  const result = primeCheck(decimalNumber);
  const checkResult = result === expextedValue ? "✅" : "❌";

  console.log(checkResult, expextedValue, result);
}

function testAll() {
  testPrime(1, 0);
  testPrime(2, 1);
  testPrime(3, 1);
  testPrime(4, 2);
  testPrime(5, 3);
  testPrime(6, 5);

}

testAll();
