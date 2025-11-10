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

function testIsPrime(primeCandidate, expected) {
  const result = isPrime(primeCandidate);
  composeMessage(primeCandidate, result, expected);
}

function testAll() {
  testIsPrime(11, true);
  testIsPrime(9, false);
  testIsPrime(13, true);
  testIsPrime(2, true);
  testIsPrime(1, false);
  testIsPrime(1, false);
  testIsPrime(0, false);

}

testAll();
