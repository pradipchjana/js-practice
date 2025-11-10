function findNumberOfDigits(numberToCheck) {
  let currentNumber = numberToCheck;
  let power = 0;
  
  while (currentNumber !== 0) {
    const remainder = currentNumber % 10;
    currentNumber = (currentNumber - remainder) / 10;
    power = power + 1;
  }
  return power;
}

function additionOfDigitsWithPower(numberToCheck) {
  let result = 0;
  let power = findNumberOfDigits(numberToCheck);
  let currentNumber = numberToCheck;

  while (currentNumber !== 0) {
    const remainder = currentNumber % 10;
    currentNumber = (currentNumber - remainder) / 10;
    result = result + (remainder ** power);
  }
  return result;
}

function isArmstrong(numberToCheck) {
  return numberToCheck === additionOfDigitsWithPower(numberToCheck);
}

function composeMessage(armstrong, expextedValue, numberToCheck){
  const checkResult = armstrong === expextedValue ? "✅" : "❌";
  const message = "number: " + numberToCheck + " output-> " + armstrong +" expected-> " + expextedValue + " " + checkResult;
  return message;
}

function testSumOfAP(numberToCheck, expextedValue) {
  const armstrong = isArmstrong(numberToCheck);
  const message = composeMessage(armstrong, expextedValue, numberToCheck);
  console.log(message);
  
}

function testAll() {
  testSumOfAP(153, true);
  testSumOfAP(370, true);
  testSumOfAP(371, true);
  testSumOfAP(1, true);
  testSumOfAP(407, true);
}

testAll();