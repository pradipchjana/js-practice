/*
  Implement the below function that tells if a string is substring 
  of another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubstringAt(string, substring, start) {
  for (let index = 0; index < substring.length; index++) {
    if (substring[index] !== string[start + index]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  if (subString === "") {
    return false;
  }
  
  for (let index = 0; index < string.length; index++) {
    if (isSubstringAt(string, subString, index)) {
      return true;
    }
  }

  return false;
}

function testIsSubstring(givenString, substring, expectedOutput) {
  const isfound = isSubstring(givenString, substring);
  const checkValue = isfound === expectedOutput ? "✅" : "❌";

  console.log(checkValue, " Answer ", isfound, "and Expected", expectedOutput);
}


function testAll() {
  testIsSubstring('pradip chandra jana', 'jana', true);
  testIsSubstring('hello world', 'worl', true);
  testIsSubstring('hello world', 'llo', true);
  testIsSubstring('pradip bist', 'jana', false);
  testIsSubstring('test case passed', 'not', false);
  testIsSubstring('bingo', 'go', true);
  testIsSubstring("vikram", '', false);
  testIsSubstring('lllo', 'llo', true);
  testIsSubstring('vkkvkcvk', 'vkc', true);
  testIsSubstring('abcbcd', 'bcc', false);
  testIsSubstring("hello", 'hello world', false);
}

testAll();