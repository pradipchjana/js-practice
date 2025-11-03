function encodeNumber(data) {
  return 'i' + data + 'e';
}

function encodeString(data) {
  return data.length + ":" + data;
}

function encodeList(data) {
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

function displayInputActualExpected(data, actual, expected) {
  console.log();
  console.log(`   Input   :  [${data}]`);
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
  console.log("Encode\n");

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
  testEncode("[1, ['hello', []]]", [1, ['hello', []]], 'li1el5:helloleee')
  testEncode("[1, ['hello', [], 678]]", [1, ['hello', [], 678]], 'li1el5:hellolei678eee')
}

function formatData(data) {
  return data.slice(1, data.length - 1);
}

function decodeNumber(data) {
  const result = data.slice(1, data.indexOf('e'));
  return parseInt(result);
}

function decodeString(data) {
  return data.slice(2, parseInt(data) + 2);
}

function findAnswerLength(answer) {
  if (!Array.isArray(answer)) {
    return (answer + '').length + 2;
  }
  let totalLength = 0;
  for (let index = 0; index < answer.length; index++) {
    if (Array.isArray(answer[index])) {
      totalLength += findAnswerLength(answer[index]);
    }
    else {
      totalLength += (answer[index] + '').length + 2;
    }
  }
  return totalLength + 2;
}

function decodeList(data) {
  let answerList = [];
  while (data !== '') {
    const answer = decode(data);

    answerList.push(answer);
    data = data.slice(findAnswerLength(answer));
  }
  return answerList;
}

function decode(data) {
  if (data[0] === 'i') {
    return decodeNumber(data);
  }

  if (data[1] === ':') {
    return decodeString(data);
  }

  if (data[0] === 'l') {
    return decodeList(formatData(data));
  }

}
function testDecode(message, data, expectedOutput) {
  const actual = decode(data);
  const isPass = areDeepEqual(actual, expectedOutput);
  consoleMessage(message, isPass);

  if (!isPass) {
    displayInputActualExpected(data, actual, expectedOutput);
  }
}

function isArray(x) {
  return typeof x === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}


function testAllDecode() {
  console.log('\nDecode\n');
  testDecode("zero", 'i0e', 0);
  testDecode("positive number", 'i123e', 123);
  testDecode("Negative Number", 'i-41e', -41);
  testDecode("string", "5:hello", 'hello');
  testDecode("empty string", '0:', '');
  testDecode("special charecter", '5:@#$%^', '@#$%^');
  testDecode("Empty list", 'le', []);
  testDecode("list of strings", 'l5:hello2:lee', ['hello', 'le']);
  testDecode("list of number", 'li123ei-43ee', [123, -43]);
  testDecode("list of numbers and strings", 'li123e3:456i6ee', [123, '456', 6])
  testDecode("Nested list", 'l0:i0el1:pli23eeee', ['', 0, ["p", [23]]])
}

function testMain() {
  testAllEncode();
  testAllDecode();
}

testMain();
