// Given a string and a single-character delimiter, returns an array of strings
// obtained by splitting the input string at each occurrence of the delimiter.
// The delimiter must be a single character.
// Examples:
// split("a,b,c", ",") => ["a", "b", "c"]
// split("one:two:three", ":") => ["one", "two", "three"]
// split("hello", ",") => ["hello"]
function findNextIndex(string, delimiter, start) {
  if (delimiter === '') {
    return string.length;
  }
  const delimiterIndex = string.indexOf(delimiter, start);
  return delimiterIndex !== -1 ? delimiterIndex : string.length;
}

function split(sentence, delimiter) {
  let start = 0;
  let end = findNextIndex(sentence, delimiter, start);
  const resultArray = [];
  while (end !== sentence.length) {
    resultArray.push(sentence.substring(start, end));
    start = end + 1;
    end = findNextIndex(sentence, delimiter, start);
  }
  resultArray.push(sentence.substring(start, end));
  return resultArray;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
}

function composeMessage(type, sentence, delimiter, result, expected) {
  const isPass = areEqual(result, expected);
  const checkValue = isPass ? '✅' : '❌';
  const inputSection = "\n[" + sentence + " || " + delimiter + "]";
  const actualSection = "\n Answer: " + result;
  const outputSection = "\n Expected: " + expected;
  let message = checkValue + " " + type;
  message += isPass ? "" : inputSection;
  message += isPass ? "" : actualSection;
  message += isPass ? "" : outputSection;
  console.log(message);
}

function testSplit(type, sentence, delimiter, expected) {
  const result = split(sentence, delimiter);
  composeMessage(type, sentence, delimiter, result, expected);
}

function testAll() {
  testSplit("Only one word", 'ab', ',', ['ab']);
  testSplit("Two words", 'ab:cd', ':', ['ab', "cd"]);
  testSplit("Three words", "a,b,c", ",", ["a", "b", "c"]);
  testSplit("two words but delimiter at end", "a,b,", ",", ["a", "b", ""]);
  testSplit("two words but delimiter at start", ",a,b", ",", ["", "a", "b"]);
  testSplit("delimiter at two ends", ",a,b,", ",", ["", "a", "b", ""]);
  testSplit("only delimiter", ':', ":", ["",""]);
  testSplit("one word no delemeter", 'a', ":", ["a"]);
  testSplit("Empty string", "", ",", [""]);
}

testAll();