// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]
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

function difference(array1, array2) {
  const differentElements = [];
  for (let index = 0; index < array1.length; index++) {
    if (!includes(array2, array1[index])) {
      differentElements.push(array1[index]);
    }
  }
  return differentElements;
}

function composeMessage(type, array1, array2, result, expected) {
  const isPass = areDeepEqual(result, expected);
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

function testDifference(type, array1, array2, expected) {
  const result = difference(array1, array2);
  composeMessage(type, array1, array2, result, expected);
}

function testAll() {
  testDifference("one element in array", [1], [2], [1]);
  testDifference("two are different element",
    [1, 2, 3, 4],
    [3, 4, 5, 6],
    [1, 2]);
  testDifference("[1,2], [2,3,4]", [1, 2], [2, 3, 4], [1]);
  testDifference("All are different elements",
    [1, [2, 3], 4],
    [3, 2, 6, 7],
    [1, [2, 3], 4]);
}

testAll();