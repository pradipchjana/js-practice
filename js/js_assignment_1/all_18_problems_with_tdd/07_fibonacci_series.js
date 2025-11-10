function primeCheck(endPoint) {
  let currentTerm = 0;
  let nextTerm = 1;
  let listOfFibonacciNumbers = "";
  
  for (let count = 0; count < endPoint; count++) {
    listOfFibonacciNumbers = listOfFibonacciNumbers + currentTerm + " ";
    nextTerm = currentTerm + nextTerm;
    currentTerm = nextTerm - currentTerm;
  }
  return listOfFibonacciNumbers;
}

function testPrime(endPoint, expextedValue) {
  const result = primeCheck(endPoint);
  const checkResult = result === expextedValue ? "✅" : "❌";

  console.log(checkResult, expextedValue, result);
}

function testAll() {
  testPrime(1, "0 ");
  testPrime(2, "0 1 ");
  testPrime(3, "0 1 1 ");
  testPrime(4, "0 1 1 2 ");
  testPrime(5, "0 1 1 2 3 ");
  testPrime(6, "0 1 1 2 3 5 ");

}

testAll();


