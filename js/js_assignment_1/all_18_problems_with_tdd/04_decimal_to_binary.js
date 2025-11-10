function binaryNumber(decimalNumber) {
  let binaryNumber = "";

  while (decimalNumber >= 1) {
    const remainder = decimalNumber % 2;
    decimalNumber = (decimalNumber - remainder) / 2;
    binaryNumber = remainder + "" + binaryNumber;
  }
  return binaryNumber;
}
function testFactorial(decimalNumber, expextedValue) {
  const result = binaryNumber(decimalNumber);
  const checkResult = result === expextedValue ? "✅" : "❌";

  console.log(checkResult, expextedValue, result);
}

function testAll() {
  testFactorial(2, "10");
  testFactorial(3, "11");
  testFactorial(8, "1000");
  testFactorial(12, "1100");
}

testAll();