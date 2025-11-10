function min(firstNumber, secondNumber) {
  return firstNumber < secondNumber ? firstNumber : secondNumber;
}

function hasFactor(firstNumber, secondNumber, divisor) {
  return (firstNumber % divisor === 0) && (secondNumber % divisor === 0);
}

function findHCF(firstNumber, secondNumber) {
  let smallestNumber = min(firstNumber, secondNumber);
  
  while ((smallestNumber > 0) && !(hasFactor(firstNumber, secondNumber, smallestNumber))) {
    smallestNumber = smallestNumber - 1;    
  }
  return smallestNumber;
}

function findLCM(firstNumber, secondNumber, hcf) {
  return (firstNumber * secondNumber) / hcf;
}

function testSumOfAP(firstNumber, secondNumber, expextedValue) {
  const hcf = findHCF(firstNumber, secondNumber);
  const lcm = findLCM(firstNumber, secondNumber, hcf);
  const checkResult = lcm === expextedValue ? "✅" : "❌";

  console.log(checkResult, expextedValue, lcm);
}

function testAll() {
  testSumOfAP(2, 3, 6);
  testSumOfAP(4, 5, 20);
  testSumOfAP(6, 9, 18);
  testSumOfAP(9, 27, 27);
  testSumOfAP(12, 18, 36);
}

testAll();