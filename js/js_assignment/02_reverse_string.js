/*
  Implement the below function to reverse the given sentence.
  Examples:
  reverseString("hello") returns "olleh"
*/

function reverseString(sentence) {
  let reverse = '';
  const start = sentence.length - 1;

  for (let index = start; index >= 0; index--) {
    reverse = reverse + sentence[index];
  }

  return reverse;
}

function composeMessage(sentence, result, expected) {
  const checkValue = result === expected ? '✅' : '❌';
  const inputSection = "[" + sentence + "]";
  const actualSection = " Answer: " + result;
  const outputSection = " Expected: " + expected;
  let message = checkValue;
  message += inputSection;
  message += actualSection;
  message += outputSection;

  console.log(message);
}

function testReverseString(sentence, expected) {
  const result = reverseString(sentence);
  composeMessage(sentence, result, expected);
}

function testAll() {
  testReverseString('ab', 'ba');
  testReverseString('abc', 'cba');
  testReverseString(' ', ' ');
  testReverseString("abcd", 'dcba');
  testReverseString("aAbb", 'bbAa');
  testReverseString('', '');
  testReverseString(' aab', 'baa ');
  testReverseString('cdaeE', 'Eeadc');
  testReverseString('bcdf', 'fdcb');
  testReverseString("hello", 'olleh');
  testReverseString('---', '---');
}

testAll();