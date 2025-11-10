// Given array1 and array2, returns true if both arrays are deeply equal, else 
// false.
// Deep equality means both arrays contain the same elements in the same order,
// including any nested arrays, which must also be deeply equal.
// Examples:
// areDeepEqual([1, 2, 3], [1, 2, 3]) => true
// areDeepEqual([1, [2, 3]], [1, [2, 3]]) => true
// areDeepEqual([1, [2, 3]], [1, [3, 2]]) => false
// areDeepEqual([1, 2], [1, 2, 3]) => false
// areDeepEqual([1, [2, [3]]], [1, [2, [3]]]) => true
// areDeepEqual([1, [2, [3]]], [1, [2, 3]]) => false
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


function composeMessage(type, array1, array2, result, expected) {
  const isPass = result === expected;
  const checkValue = isPass ? '✅' : '❌';
  const inputSection = "\n[" + array1 + " || " + array2 + "]";
  const actualSection = "\n Answer: " + result;
  const outputSection = "\n Expected: " + expected;
  let message = checkValue + " " + type;
  message += isPass ? "" : inputSection;
  message += isPass ? "" : actualSection;
  message += isPass ? "" : outputSection;
  console.log(message);
}

function testAreDeepEqual(type, array1, array2, expected) {
  const result = areDeepEqual(array1, array2);
  composeMessage(type, array1, array2, result, expected);
}

function testAll() {
  testAreDeepEqual("simple same length", [1, 2, 3], [1, 2, 3], true);
  testAreDeepEqual("Not same length", [1, 2], [1, 2, 3], false);

  testAreDeepEqual("[1, [2, 3]],[1, [2, 3]]",
    [1, [2, 3]],
    [1, [2, 3]],
    true);
  testAreDeepEqual("Nested array but different value",
    [1, [3, 2]],
    [1, 3, 2],
    false);
  testAreDeepEqual("Nested array, different size of elements",
    [1, [2, 3, 4]],
    [1, [2, 3]],
    false);
  testAreDeepEqual("Deeper in 3 layer",
    [1, [2, [3]]],
    [1, [2, [3]]],
    true);
  testAreDeepEqual("[1, [2, [3, 2]]],[1, [2, [3]]]",
    [1, [2, [3, 2]]],
    [1, [2, [3]]],
    false);
  testAreDeepEqual("Empty array", [[[]]], [[[]]], true);
  testAreDeepEqual("two are diffrent nested array",
    [1, [2, 3], 4, 5],
    [1, [2, 3], 3, 5],
    false);
  testAreDeepEqual("[1, [2, [3]]], [1, [2, [3]]]",
    [1, [2, [3]]],
    [1, [2, [3]]],
    true);
  testAreDeepEqual("[1, [2, [3]]], [1, [2, 3]]",
    [1, [2, [3]]],
    [1, [2, 3]],
    false);
  testAreDeepEqual("Nested Empty array", [[[]], [[]]], [[[]], []], false);
  testAreDeepEqual("if any input is string", 'abc', ['a', 'b', 'c'], false);
}

testAll();