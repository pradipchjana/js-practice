/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function slice(text, start, end) {
  let resultString = "";
  let lengthOfText = text.length;
  let startingPoint = start >= 0 ? start : 0;
  const endingPoint = end >= text.length ? text.length - 1 : end;

  while (startingPoint <= endingPoint && lengthOfText) {
    resultString = resultString + text[startingPoint];
    startingPoint = startingPoint + 1;
  }
  return resultString;
}

function occurrences(string, substring) {
  let numberOfString = 0;
  let index = 0;
  const substringLength = substring.length;

  while (index < string.length) {
    if (string[index] === substring[0]) {
      const newString = slice(string, index, index + substringLength - 1);
      if (newString === substring) {
        numberOfString = numberOfString + 1;
      }
    }
    index = index + 1;
  }
  return numberOfString;
}


function testOccurences(givenString, subString, expectedOutput) {
  const result = occurrences(givenString, subString);
  const checkValue = result === expectedOutput ? "✅" : "❌";

  console.log(checkValue, " Answer ", result, "and Expected ", expectedOutput);
}

function testAll() {
  testOccurences('hello world', 'l', 3);
  testOccurences('hello world', 'll', 1);
  testOccurences('hello world', 'world', 1);
  testOccurences('hello world', 'zebra', 0);
  testOccurences("aaaabba", 'a', 5);
  testOccurences('l', 'l', 1);
  testOccurences('', '', 0);
  testOccurences('hi world world hi', 'world', 2);
  testOccurences('a', '', 0);
  testOccurences('hahahaha', "haha", 3);
}

testAll();