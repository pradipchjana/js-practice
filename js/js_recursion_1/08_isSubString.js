function isPresentInSub(string, otherString, start, index) {
  if (index === otherString.length) {
    return true;
  }
  if (otherString[index] !== string[start + index]) {
    return false;
  }
  return isPresentInSub(string, otherString, start, index + 1);
}

function isSubStringPresent(string, otherString, index) {
  if (string.length === index) {
    return false;
  }
  if (isPresentInSub(string, otherString, index, 0)) {
    return true;
  }
  return isSubStringPresent(string, otherString, index + 1);
}

function isSubString(string, otherString) {
  if (otherString === '') {
    return false;
  }
  return isSubStringPresent(string, otherString, 0);
}

function composeMessage(string, otherString, result, expected) {
  const checkValue = result === expected ? '✅' : '❌';
  const inputSection = "[" + string + " " + otherString + "]";
  const actualSection = " Answer: " + result;
  const outputSection = " Expected: " + expected;
  let message = checkValue;
  message += inputSection;
  message += actualSection;
  message += outputSection;
  console.log(message);
}

function testIsSubString(string, otherString, expected) {
  const result = isSubString(string, otherString);
  composeMessage(string, otherString, result, expected);
}

function testAll() {
  testIsSubString("abcd", 'ab', true);
  testIsSubString('abcd', 'bc', true);
  testIsSubString('abcd', 'cd', true);
  testIsSubString('abcd', 'da', false);
  testIsSubString(' ', '', false);
  testIsSubString('pradip', '', false);
  testIsSubString('apple', 'pa', false);
}

testAll();