function simpleInterest(a, b, c) {
  return (a * b * c) / 100 ;
}
 
function testSimpleInterest(a, b, c, expextedValue) {
  const result = simpleInterest(a, b, c);
  const checkResult = (result === expextedValue) ? "✅" : "❌";

  console.log(checkResult , expextedValue ,result);
}


function testAll() {
  testSimpleInterest(1, 2, 10, 0.2);
  testSimpleInterest(1, 3, 10, 0.3);
  testSimpleInterest(10, 2, 10, 2);
  testSimpleInterest(100, 4, 10, 40);
  testSimpleInterest(100, 3, 20, 60);
  testSimpleInterest(1, 2, 5, 0.1);
  testSimpleInterest(1000, 2, 50, 1000);
}

testAll();
