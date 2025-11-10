function findLastIndex(string, char) {
  return findLastCharacter(string, char, string.length - 1);
}

function findLastCharacter(string, char, index) {
  if (index < 0) {
    return -1;
  }
  if (string[index] === char) {
    return index;
  }
  return findLastCharacter(string, char, index - 1);
}

function composeMessage(string, char, result, expected) {
  const checkValue = result === expected ? '✅' : '❌';
  const inputSection = "[" + string + " " + char + "]";
  const actualSection = " Answer: " + result;
  const outputSection = " Expected: " + expected;
  let message = checkValue;
  message += inputSection;
  message += actualSection;
  message += outputSection;
  console.log(message);
}

function testFindLastIndex(string, char, expected) {
  const result = findLastIndex(string, char);
  composeMessage(string, char, result, expected);
}

function testAll() {
  testFindLastIndex("abcd", 'a', 0);
  testFindLastIndex("ab", 'd', -1);
  testFindLastIndex('ababab', 'a', 4);
  testFindLastIndex('ababab', 'b', 5);
  testFindLastIndex('aaab', 'a', 2);
  testFindLastIndex('aaab', 'b', 3);
}

testAll();