function encode(data) {
  return 'i'+ data +'e';
}

function consoleMessage(message, isPass) {
  const symbol = isPass ? "✅" : "❌";
  console.log(symbol, message);
}

function displayInputActualExpected(date, actual, expected) {
  console.log();
  console.log(`   Input   :  [${date}]`);
  console.log(`   Actual  :  ${actual}`);
  console.log(`   Expected:  ${expected}`);
  console.log(`   ----`);
}

function testEncode(message, data, expectedOutput) {
  const actual = encode(data);
  const isPass = actual === expectedOutput;
  consoleMessage(message, isPass);
  
  if (!isPass) {
    displayInputActualExpected(data, actual, expectedOutput);
  }
}

function testAllEncode() {
  testEncode('Zero', 0, 'i0e');
  testEncode("123", 123, "i123e");
  testEncode("-43", -43, 'i-43e');
}

function testMain() {
  testAllEncode();
}

testMain();
