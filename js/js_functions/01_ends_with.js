/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubstringAt(string, substring, start) {
  for (let index =  0; index < substring.length; index++) {
    if (substring[index] !== string[start + index]) {
      return false;
    }
  }

  return true;
}

function endsWith(string, substring) {
  const start = string.length - substring.length;

  return isSubstringAt(string, substring, start);
}

function testEndsWith(givenString, substring, expectedOutput) {
  const result = endsWith(givenString, substring);
  const checkValue = result === expectedOutput ? "✅" : "❌";

  console.log(checkValue, expectedOutput, result);
}
function testAll() {
  testEndsWith('hello world', 'ld', true);
  testEndsWith('hello world', 'World', false);
  testEndsWith('hello world', 'hello', false);
  testEndsWith('pradip', 'pr', false);
  testEndsWith('pradip', 'dip', true);
  testEndsWith('step11', '11', true);
  testEndsWith('vikram', 'kr', false);
  testEndsWith('XCVGtB', 'tB', true);
  testEndsWith('X', '', true);
  testEndsWith('', '', true);
  testEndsWith('ss', '', true);
  testEndsWith('faltu', 'aB', false);
}

testAll();