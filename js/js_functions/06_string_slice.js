/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function slice(text, start, end) {
  let resultString = "";
  let lengthOfText = text.length;
  let index = start >= 0 ? start : 0;
  const endingPoint = end >= text.length ? text.length - 1 : end;

  while (index <= endingPoint && lengthOfText) {
    resultString = resultString + text[index];
    index = index + 1;
  }
  return resultString;
}

function testSlice(givenText, startPoint, endPoint, expectedOutput) {
  const sliceText = slice(givenText, startPoint, endPoint);
  const checkValue = sliceText === expectedOutput ? "✅" : "❌";

  console.log(checkValue, " Answer ", sliceText, "Expected ", expectedOutput);
}

function testAll() {
  testSlice('hello world', 0, 4, "hello");
  testSlice('pradip chandra jana', 7, 13, 'chandra');
  testSlice('', 0, 10, '');
  testSlice("thoughtworks", 7, 11, "works");
  testSlice('negetive', -2, 3, "nege");
  testSlice(" i am pagol ladka", -5, 20, ' i am pagol ladka');
  testSlice("k", 0, 0, 'k');
  testSlice("32", 0, 2, '32');
}

testAll();