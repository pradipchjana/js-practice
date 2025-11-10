
function createReverse(sentence, index) {
  if (index < 0) {
    return "";
  }
  return sentence[index] + createReverse(sentence, index - 1);
}

function reverse(string) {
  if (string === '') {
    return "";
  }
  return createReverse(string, string.length - 1);
}

function composeMessage(primeCandidate, result, expected) {
  const checkValue = result === expected ? '✅' : '❌';
  const inputSection = "[" + primeCandidate + "]";
  const actualSection = " Answer: " + result;
  const outputSection = " Expected: " + expected;
  let message = checkValue;
  message += inputSection;
  message += actualSection;
  message += outputSection;
  console.log(message);
}

function testReverse(primeCandidate, expected) {
  const result = reverse(primeCandidate);
  composeMessage(primeCandidate, result, expected);
}

function testAll() {
  testReverse("ab", 'ba');
  testReverse("abc", 'cba');
  testReverse("", '');
  testReverse(" ", ' ');
  testReverse('abcd', 'dcba');
}

testAll();