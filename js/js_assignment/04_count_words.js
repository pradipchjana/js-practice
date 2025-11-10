/*
  Implement the below function to count the number of words
  in the given sentence.

  Rules:
  - A word is defined as a sequence of non-whitespace characters.
  - Whitespace includes SPACE(" "), TAB("\t"), and NEW LINE("\n").
  - Multiple consecutive whitespace characters should be treated
    as a single separator.
  - Leading and trailing whitespace should not affect the word count.

  Example:
  countWords("hello   \t   world \n test")
    -> 3
*/
function isWhiteSpaces(letter) {
  return letter === ' ' || letter === '\t' || letter === '\n';
}

function countWords(sentence) {
  let space = 0;
  let count = 0;
  for (let index = 0; index < sentence.length; index++) {
    if (!isWhiteSpaces(sentence[index])) {
      space = 1;
    }

    if (isWhiteSpaces(sentence[index]) && space === 1) {
      space = space + 1;
      count = count + 1;
    }
  }
  if (space === 1) {
    count = count + 1;
  }

  return count;
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

function testCountwords(sentence, expected) {
  const result = countWords(sentence);
  composeMessage(sentence, result, expected);
}

function testAll() {
  testCountwords(' ab', 1);
  testCountwords('---    ', 1);
  testCountwords(' abc ', 1);
  testCountwords("    \n \t hello world \t \n", 2);
  testCountwords(' aa b', 2);
  testCountwords('bcdf', 1);
  testCountwords('\t\t', 0);
  testCountwords("  \n  ab  cd ", 2);
  testCountwords("        aA  \t\tbb   ", 2);

}

testAll();