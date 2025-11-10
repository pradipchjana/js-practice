function firstPrimeAbove(number) {
  if (isPrime(number + 1)) {
    return number + 1;
  }

  return firstPrimeAbove(number + 1);
}

function isPrimeCheck(primeCandidate, divisor) {

  if (divisor === primeCandidate) {
    return true;
  }

  if (primeCandidate % divisor === 0) {
    return false;
  }

  return isPrimeCheck(primeCandidate, divisor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }
  
  return isPrimeCheck(primeCandidate, 2);
}

function composeMessage(primeCandidate, result, expected) {
  const checkValue = result === expected ? '✅' : '❌';
  const inputSection = "[" + primeCandidate + "]";
  const actualSection = " Answer: " + result;
  const outputSection = " Expected: " + expected;
  let message = checkValue;
  message += inputSection;
  message += actualSection;
  message += outputSection;
  console.log(message);
}

function testFirstPrimeAbove(primeCandidate, expected) {
  const result = firstPrimeAbove(primeCandidate);
  composeMessage(primeCandidate, result, expected);
}

function testAll() {
  testFirstPrimeAbove(11, 13);
  testFirstPrimeAbove(9, 11);
  testFirstPrimeAbove(13, 17);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(94, 97);
  testFirstPrimeAbove(0, 2);

}

testAll();