/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

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

function findIndex(text, target) {
  for (let term = 0; term < text.length; term = term + 1) {
    if (isSubstringAt(text, target, term)) {
      return term;
    }
  }
  return -1;
}

function testFindIndex(givenString, targetCharecter, expected) {
  const result = findIndex(givenString, targetCharecter);
  const checkValue = result === expected ? "✅" : "❌";

  console.log(checkValue, "expectation : ", expected, "and answer: ", result);
}

function testAll() {
  testFindIndex('hello world', 'o', 4);
  testFindIndex('my name is khanna', 'n', 3);
  testFindIndex("hellloooo good morning", 'o', 5);
  testFindIndex("pradip", 'b', -1);
  testFindIndex("Berlin", 'B', 0);
  testFindIndex("hello", 'o', 4);
  testFindIndex('virus', 'p', -1);
  testFindIndex('repeating iiiiiiii', 'i', 6);
}

testAll();