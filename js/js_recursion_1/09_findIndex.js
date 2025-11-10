function findFirstCharacter(string, char, index) {
  if (string.length === index) {
    return -1;
  }
  if (string[index] === char) {
    return index;
  }
  return findFirstCharacter(string, char, index + 1);
}

function findIndex(string, char) {
  return findFirstCharacter(string, char, 0);
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

function testFindIndex(string, char, expected) {
  const result = findIndex(string, char);
  composeMessage(string, char, result, expected);
}

function testAll() {
  testFindIndex("Find First element", "abcd", 'a', 0);
  testFindIndex("ab", 'd', -1);
  testFindIndex('aaab', 'a', 0);
  testFindIndex('aaab', 'b', 3);
}

testAll();