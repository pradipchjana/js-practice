function reverseNumber(numberToCheck) {
  let currentNumber = numberToCheck;
  let numberAfterReverse = 0;
  while (currentNumber !== 0) {
    const remainder = currentNumber % 10;
    currentNumber = ((currentNumber - remainder) / 10);
    numberAfterReverse = (numberAfterReverse * 10) + remainder;
  }
  return numberAfterReverse;
}

function sumOfAp(numberToCheck){
  return numberToCheck === reverseNumber(numberToCheck);
}

function testSumOfAP(numberToCheck, expextedValue) {
  const palindrome = sumOfAp(numberToCheck);
  const checkResult = palindrome === expextedValue ? "✅" : "❌";
  console.log(checkResult, numberToCheck, expextedValue, palindrome);
}

function testAll() {
  testSumOfAP(121, true);
  testSumOfAP(342, false);
  testSumOfAP(123454321, true);
  testSumOfAP(76, false);
  testSumOfAP(7, true);
}

testAll();