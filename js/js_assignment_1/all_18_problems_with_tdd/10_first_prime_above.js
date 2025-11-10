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

function firstPrimeAbove(givenNumber) {
  let term = givenNumber;
  while (!primeCheck(term)) {
    term = term + 1;
  }
  return term;
}

function testFindFirstAbovePrime(givenNumber, expextedValue) {
  const abovePrime = firstPrimeAbove(givenNumber + 1);
  const checkResult = abovePrime === expextedValue ? "✅" : "❌";

  console.log(checkResult, expextedValue, abovePrime);
}

function testAll() {
  testFindFirstAbovePrime(1, 2);
  testFindFirstAbovePrime(0, 2);
  testFindFirstAbovePrime(2, 3);
  testFindFirstAbovePrime(13, 17);
  testFindFirstAbovePrime(5, 7);
  testFindFirstAbovePrime(7, 11);
}

testAll();
