/*
  Implement the below function to convert a string from snake_case
  format into camelCase format.

  Example:
  toCamelCase("hello_wORLd_pro1gram")
    -> "helloWorldPro1gram"
*/
function lowerToUpperCase(letter) {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let index = 0; index < lowerCase.length; index++) {
    if (lowerCase[index] === letter) {
      return upperCase[index];
    }
  }

  return letter;
}

function upperToLowerCase(letter) {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let index = 0; index < upperCase.length; index++) {
    if (upperCase[index] === letter) {
      return lowerCase[index];
    }
  }

  return letter;
}

function createAllLower(sentence) {
  let resultString = "";

  for (let index = 0; index < sentence.length; index++) {
    resultString += upperToLowerCase(sentence[index]);
  }
  
  return resultString;
}

function camelCase(letter, prevLetter) {
  if (prevLetter === '_' && letter !== "_") {
    return lowerToUpperCase(letter);
  }
  if (letter === '_') {
    return "";
  }
  return letter;
}

function firstIndex(sentence) {
  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== '_') {
      return index;
    }
  }
  return sentence.length - 1;
}

function trim(sentence) {
  let resultString = "";
  const start = firstIndex(sentence);
  const end = sentence.length - 1;

  if (start === end) {
    return "";
  }

  for (let index = start; index <= end; index++) {
    resultString = resultString + sentence[index];
  }

  return resultString;
}

function toCamelCase(sentence) {
  let newString = createAllLower(sentence);
  let resultString = "";
  newString = trim(newString);
  console.log(newString);

  for (let index = 0; index < newString.length; index++) {
    resultString += camelCase(newString[index], newString[index - 1]);

  }
  return resultString;
}

function composeMessage(sentence, result, expected) {
  const checkValue = result === expected ? '✅' : '❌';
  const inputSection = "[" + sentence + "]";
  const actualSection = " Answer: " + result;
  const outputSection = "Expected: " + expected;
  let message = checkValue;
  message = message + inputSection;
  message = message + actualSection;
  message = message + outputSection;

  console.log(message);
}

function testToCamelCase(sentence, expected) {
  const result = toCamelCase(sentence);
  composeMessage(sentence, result, expected);
}

function testAll() {
  testToCamelCase('a_a', 'aA');
  testToCamelCase('a_b', "aB");
  testToCamelCase('abc_p', "abcP");
  testToCamelCase('abc__p', "abcP");
  testToCamelCase("hello_wORLd_pro1gram", 'helloWorldPro1gram')
  testToCamelCase('', '');
  testToCamelCase('hello', 'hello');
  testToCamelCase('HELLO', "hello");
  testToCamelCase('Pradip_chandra_jana', 'pradipChandraJana');
  testToCamelCase("hello_____world", 'helloWorld');
  testToCamelCase('_hello', "hello");
  testToCamelCase('_hello_', "hello");
  testToCamelCase('______thought__worker___', "thoughtWorker");
}

testAll();