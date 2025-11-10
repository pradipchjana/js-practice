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

function testSumOfAP(firstNumber, secondNumber, expextedValue) {
  const hcf = findHCF(firstNumber,secondNumber);
  const checkResult = hcf=== expextedValue ? "✅" : "❌";

  console.log(checkResult, expextedValue, hcf);
}

function testAll() {
  testSumOfAP(2, 3, 1);
  testSumOfAP(4, 5, 1);
  testSumOfAP(6, 9, 3);
  testSumOfAP(9, 27, 9);
  testSumOfAP(12, 18, 6);
}

testAll();