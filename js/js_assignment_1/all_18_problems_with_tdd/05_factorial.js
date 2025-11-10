function primeCheck(number) {
  let factorial = 1;
  
  for (let numberForMultiplication = 1; numberForMultiplication <= number; numberForMultiplication++) {
    factorial = factorial * numberForMultiplication;
  }
  return factorial;
}

function testPrime(decimalNumber, expextedValue) {
  const result = primeCheck(decimalNumber);
  const checkResult = result === expextedValue ? "✅" : "❌";

  console.log(checkResult, expextedValue, result);
}

function testAll() {
  testPrime(1, 1);
  testPrime(3, 6);
  testPrime(2, 2);
  testPrime(0, 1);
  testPrime(5, 120);
}

testAll();

