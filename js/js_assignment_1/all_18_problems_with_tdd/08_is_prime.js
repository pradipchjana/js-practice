function isDivisible(dividend, divisior) {
  return dividend % divisior === 0;
}

function primeCheck(numberToCheck) {
  let count = 2;
  let isPrime = numberToCheck > 1;
  
  while (isPrime && count < numberToCheck) { 
    isPrime = !isDivisible(numberToCheck, count);
    count = count + 1;
  }
  return isPrime;
}

function testPrime(numberForCheck, expextedValue) {
  const isItPrime = primeCheck(numberForCheck);
  const checkResult = isItPrime === expextedValue ? "✅" : "❌";

  console.log(checkResult, expextedValue, isItPrime);
}

function testAll() {
  testPrime(0, false);
  testPrime(1, false);
  testPrime(2, true);
  testPrime(3, true);
  testPrime(4, false);
  testPrime(7, true);
  testPrime(9, false);

}

testAll();
