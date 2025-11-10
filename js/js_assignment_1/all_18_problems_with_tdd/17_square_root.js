function sumOfAp(givenNumber) {
  return givenNumber ** 0.5;
}

function isApproximately(squareRootValue,expextedValue) {
  const difference = squareRootValue < expextedValue ? expextedValue - squareRootValue : squareRootValue - expextedValue;
  return difference < 0.5;
}

function testSumOfAP(givenNumber, expextedValue) {
  const squareRootValue = sumOfAp(givenNumber);
  const checkResult = isApproximately(squareRootValue,expextedValue)? "✅" : "❌";
  console.log(checkResult, givenNumber, expextedValue, squareRootValue);
}


function testAll() {
  testSumOfAP(4, 2);
  testSumOfAP(36, 6);
  testSumOfAP(7, 2.64);
  testSumOfAP(8, 2.82);
  testSumOfAP(25, 5);
}

testAll();
