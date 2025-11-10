// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers which are below threshold.
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
// do not modify input parameters
function filterBelow(array, threshold) {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}

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

function composeMessage(type, array, threshold, result, expected) {
  const isPass = areEqual(result, expected);
  const checkValue = isPass ? '✅' : '❌';
  const inputSection = "\n[" + array + " || " + threshold + "]";
  const actualSection = "\n Answer: " + result;
  const outputSection = "\n Expected: " + expected;
  let message = checkValue + " " + type;
  message += isPass ? "" : inputSection;
  message += isPass ? "" : actualSection;
  message += isPass ? "" : outputSection;
  console.log(message);
}

function testFilterBelow(type, array, threshold, expected) {
  const result = filterBelow(array, threshold);
  composeMessage(type, array, threshold, result, expected);
}

function testAll() {
  testFilterBelow("One eliment and Below thresshold", [2], 3, [2]);
  testFilterBelow("One eliment and Above thresshold", [5], 3, []);
  testFilterBelow("One eliment and equal to thresshold", [3], 3, []);
  testFilterBelow("All element Above thresshold", [5, 6, 7, 8], 3, []);
  testFilterBelow("All element Below thresshold", [1, 2, 3], 4, [1, 2, 3]);
  testFilterBelow("All data mixed", [6, 2, 3, 1, 4, 7], 3, [2, 1]);

}

testAll();