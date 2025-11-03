function encodeNumber(data) {
  return 'i' + data + 'e';
}

function encodeString(data) {
  return data.length + ":" + data;
}

function encode(data) {
  if (typeof data === "number") {
    return encodeNumber(data);
  }

  if (typeof data === "string") {
    return encodeString(data);
  }
  return 'i' + data + 'e';
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
  testEncode("Positive Number", 123, "i123e");
  testEncode("Negative Number", -43, 'i-43e');
  testEncode("Empty String", "", "0:");
  testEncode("Hello", 'Hello', '5:Hello');
  testEncode("spacial charecter", "hi! how are you.", '16:hi! how are you.')
}

function testMain() {
  testAllEncode();
}

testMain();
