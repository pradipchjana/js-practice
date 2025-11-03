function encodeNumber(data) {
  return 'i' + data + 'e';
}

function encodeString(data) {
  return data.length + ":" + data;
}

function encodeList(data){
  let answer = '';
  for (let index = 0; index < data.length; index++) {
    answer += encode(data[index]);
  }
  return 'l' + answer + 'e';
}

function encode(data) {
  if (typeof data === "number") {
    return encodeNumber(data);
  }

  if (typeof data === "string") {
    return encodeString(data);
  }

  if (Array.isArray(data)) {
    return encodeList(data);
  }
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
  testEncode("spacial charecter", "hi! how are you.", '16:hi! how are you.');
  testEncode("Empty list", [], 'le');
  testEncode("list of Numbers", [1, 123, -32], 'li1ei123ei-32ee');
  testEncode("list of strings", ['@#$%^', 'le', ''], 'l5:@#$%^2:le0:e')
  testEncode("list of numbers and strings", [123, 'hello'], 'li123e5:helloe');
  testEncode("nested lists", [1, ['hello', []]], 'li1el5:helloleee')
}

function testMain() {
  testAllEncode();
}

testMain();
