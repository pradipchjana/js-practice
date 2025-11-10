function isDivisible(dividend,divisior) {
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

function findAllPrimesInGivenRange(startOfRange, endOfRange) {
  const startingPoint = startOfRange < 2 ? 2 : startOfRange;
  let listPrimeNumbers = "";

  for (let numberNeedToCheck = startingPoint; numberNeedToCheck <= endOfRange; numberNeedToCheck++) {
    if (primeCheck(numberNeedToCheck)) {
      listPrimeNumbers = listPrimeNumbers + numberNeedToCheck + " ";
    }
  }
  return listPrimeNumbers;
}

function testPrimeInRange(startOfRange, endOfRange, expextedValue) {
  const primeNumbers = findAllPrimesInGivenRange(startOfRange, endOfRange)
  const checkResult = primeNumbers === expextedValue ? "✅" : "❌";
  
  console.log(checkResult, expextedValue, primeNumbers);
}

function testAll() {
  testPrimeInRange(1, 7, "2 3 5 7 ");
  testPrimeInRange(3, 7, "3 5 7 ");
  testPrimeInRange(7, 21, "7 11 13 17 19 ");
  testPrimeInRange(7, 7, "7 ");
  testPrimeInRange(3, 9, "3 5 7 ");
  testPrimeInRange(0, 9, "2 3 5 7 ");
}

testAll();



