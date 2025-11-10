// Given an array and a value, returns true if the value is present in the 
// array, else false.
// Examples:
// includes([1, 2, 3], 2) => true
// includes([1, 2, 3], 4) => false
// includes([], 1) => false
// do not modify input parameters
function isArray(x) {
  return typeof x === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

function includes(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (areDeepEqual(array[index], target)) {
      return true;
    }
  }
  return false;
}

function composeMessage(type, sentence, delimiter, result, expected) {
  const isPass = result === expected;
  const checkValue = isPass ? '✅' : '❌';
  const inputSection = "\n[" + sentence + " || " + delimiter + "]";
  const actualSection = "\n Answer: " + result;
  const outputSection = "\n Expected: " + expected;
  let message = checkValue + " " + type;
  message += isPass ? "" : inputSection;
  message += isPass ? "" : actualSection;
  message += isPass ? "" : outputSection;
  console.log(message);
}

function testIncludes(type, sentence, delimiter, expected) {
  const result = includes(sentence, delimiter);
  composeMessage(type, sentence, delimiter, result, expected);
}

function testAll() {
  testIncludes("One elements", [1], 1, true);
  testIncludes("One elements but Incorrect", [2], 1, false);
  testIncludes("two elements, all correct", [1, 1], 1, true);
  testIncludes("two elements, No correct element", [2, 3], 1, false);
  testIncludes("empty array", [], 1, false);
  testIncludes("present array", [1, 2, [3, 2]], [3, 2], true);

}

testAll();
