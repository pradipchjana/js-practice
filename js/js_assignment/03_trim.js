/*
  Implement the below function to trim(remove all leading and trailing 
  whitespaces) from the given sentence.
  A whitespace is SPACE(" "), NEW LINE("\n"), TAB("\t")
  Examples:
  reverseString(" hello world\n") returns "hello world"
*/

function isNoWhiteSpaces(letter) {
  const whitespace = ' \n\t';

  for (let index = 0; index < whitespace.length; index++) {
    if (whitespace[index] === letter) {
      return false;
    }
  }

  return true;
}

function firstIndex(sentence) {
  for (let index = 0; index < sentence.length; index++) {
    if (isNoWhiteSpaces(sentence[index])) {
      return index;
    }
  }
  return -1;
}

function lastIndex(sentence) {
  for (let index = sentence.length - 1; index >= 0; index--) {
    if (isNoWhiteSpaces(sentence[index])) {
      return index;
    }
  }
  return -1;
}
function trim(sentence) {
  let resultString = "";
  const start = firstIndex(sentence);
  const end = lastIndex(sentence);

  if (start === end) {
    return "";
  }

  for (let index = start; index <= end; index++) {
    resultString = resultString + sentence[index];
  }
  
  return resultString;
}

function composeMessage(sentence, result, expected) {
  const checkValue = result === expected ? '✅' : '❌';
  const inputSection = "[" + sentence + "]";
  const actualSection = " Answer: " + result;
  const outputSection = " Expected: " + expected;
  let message = checkValue;
  message = message + inputSection;
  message = message + actualSection;
  message = message + outputSection;

  console.log(message);
}

function testTrim(sentence, expected) {
  const result = trim(sentence);
  composeMessage(sentence, result, expected);
}

function testAll() {
  testTrim('  ', '');
  testTrim('\t\t', '');
  testTrim(' ab', 'ab');
  testTrim(' abc ', 'abc');
  testTrim("  \n  abcd ", 'abcd');
  testTrim("        aAbb   ", 'aAbb');
  testTrim(' aa b', 'aa b');
  testTrim('    cd ae E  ', 'cd ae E');
  testTrim('bcdf', 'bcdf');
  testTrim("    \n \t hello world \t \n", 'hello world');
  testTrim('---    ', '---');
}

testAll();