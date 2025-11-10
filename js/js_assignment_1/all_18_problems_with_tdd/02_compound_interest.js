function calculateInterest(t, r) {
  return (t * r) / 100;
}

function calculateCompoundInterest(p, t, r) {
  let totalAmount = p;

  for (let year = 1; year <= t; year++) {
    totalAmount = totalAmount + calculateInterest(totalAmount,r);; 
  }
  return totalAmount - p;
}

function isApproximately(compoundInterest, expextedValue) {
  const difference = compoundInterest < expextedValue ? expextedValue - compoundInterest : compoundInterest - expextedValue;
  return difference < 0.5;
}

function testCompoundInterest(p, t, r, expextedValue) {
  const compoundInterest = calculateCompoundInterest(p, t, r);
  const checkResult =  isApproximately(compoundInterest, expextedValue) ? "✅" : "❌";

  console.log(checkResult, expextedValue, compoundInterest);
}

function testAll() {
  testCompoundInterest(1000, 1, 5, 50);
  testCompoundInterest(1250, 1, 8, 100);
  testCompoundInterest(500, 3 ,20, 364);
  testCompoundInterest(256, 2, 25, 144);
  testCompoundInterest(5000, 10, 7, 4835.76);

}

testAll();