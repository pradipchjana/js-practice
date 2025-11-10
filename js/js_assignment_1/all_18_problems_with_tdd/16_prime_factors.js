function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function sumOfAp(givenNumber) {
  let currentNumber = givenNumber;
  let numberForDivision = 2;
  let listOfFactors = "";
  
  while (numberForDivision <= givenNumber) {
    if (isDivisible(currentNumber, numberForDivision)) {
      listOfFactors = listOfFactors + numberForDivision + " ";
      currentNumber = currentNumber / numberForDivision;
    } else {
      numberForDivision = numberForDivision + 1;
    }
  }
  return listOfFactors;
}

function testSumOfAP(givenNumber, expextedValue) {
  const primeFactors = sumOfAp(givenNumber);
  const checkResult = primeFactors === expextedValue ? "✅" : "❌";
  console.log(checkResult, givenNumber, expextedValue, primeFactors);
}

function testAll() {
  testSumOfAP(12, "2 2 3 ");
  testSumOfAP(36, "2 2 3 3 ");
  testSumOfAP(15, "3 5 ");
  testSumOfAP(20, "2 2 5 ");
  testSumOfAP(25, "5 5 ");
}

testAll();