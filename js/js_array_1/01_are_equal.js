// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([1, [22] 3], [1, [22], 3]) => true
// do not modify input parameters
function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
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

function testAreEqual(type, array1, array2, expected) {
  const result = areEqual(array1, array2);
  composeMessage(type, array1, array2, result, expected);
}

function testAll() {
  testAreEqual("Both are equal", [1, 2, 3, 4], [1, 2, 3, 4], true);
  testAreEqual("Both are not equal length", [1, 2, 3], [1, 2, 3, 4], false);
  testAreEqual("Both are Not equal", [1, 2, 3], [1, 3, 2], false);
  testAreEqual("use array inside array", [1, [22], 3], [1, [22], 3], true);
}

testAll();