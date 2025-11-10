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

function isPalindrome(palindromeCandidate) {
  return palindromeCandidate === reverse(palindromeCandidate);
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

function testIsPalindrome(primeCandidate, expected) {
  const result = isPalindrome(primeCandidate);
  composeMessage(primeCandidate, result, expected);
}

function testAll() {
  testIsPalindrome('121', true);
  testIsPalindrome('pradip', false);
  testIsPalindrome('level', true);

}

testAll();