
function sumOfAp(a, d, n) {
  let sumOfAp = a;
  let nextTerm = a; 
  
  for(let start = 1; start < n; start++){
    nextTerm = nextTerm + d;
    sumOfAp = sumOfAp + nextTerm;
  }
  return sumOfAp;
}

function testSumOfAP(a, d, n, expextedValue) {
  const result = sumOfAp(a, d, n);
  const checkResult = result === expextedValue ? "✅" : "❌";
  console.log(checkResult, a, d, n, expextedValue, result);
}

function testAll() {
  testSumOfAP(2, 3, 5, 40);
  testSumOfAP(10, -2, 4, 28);
  testSumOfAP(-5, 2, 6, 0);
  testSumOfAP(7, 1, 1, 7);
  testSumOfAP(1, 1, 100, 5050);
}

testAll();

