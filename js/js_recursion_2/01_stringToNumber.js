function convert(total, string, term) {
  if (term === string.length) {
    return total;
  }
  return convert((total * 10) + findNumber(string[term], 0), string, term + 1);
}

function findNumber(number, index) {
  const numberString = '0123456789';
  if (numberString[index] === number) {
    return index;
  }
  if (index === numberString.length) {
    return 0;
  }
  return findNumber(number, index + 1);
}
function stringToNumber(string) {
  const multiply = string[0] === '-' ? -1 : 1;
  const start = multiply === -1 ? 1 : 0;
  return multiply * convert(0, string, start);
}

function composeMessage(type, givenNumber, result, expected) {
  const isPass = result === expected;
  const checkValue = isPass ? '✅' : '❌';
  const inputSection = "\n[" + givenNumber + "]";
  const actualSection = "\nAnswer: " + result;
  const outputSection = " \nExpected: " + expected;
  let message = checkValue + " " + type;
  message += isPass ? "" : inputSection;
  message += isPass ? "" : actualSection;
  message += isPass ? "" : outputSection;
  console.log(message);
}

function testStringToNumber(type, givenNumber, expected) {
  const result = stringToNumber(givenNumber);
  composeMessage(type, givenNumber, result, expected);
}

function testAll() {
  testStringToNumber("valid 1 digit number", "1", 1);
  testStringToNumber("valid negative number", "-1", -1);
  testStringToNumber("valid two digit number", "12", 12);
  testStringToNumber("valid 3 digits number", "213", 213);
  testStringToNumber("Invalid number", "abc", 0);
  testStringToNumber("For 00", "00", 0);

}

testAll();