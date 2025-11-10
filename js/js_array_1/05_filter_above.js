// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
// do not modify input parameters
function filterAbove(array, threshold) {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
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

function testFilterAbove(type, array, threshold, expected) {
  const result = filterAbove(array, threshold);
  composeMessage(type, array, threshold, result, expected);
}

function testAll() {
  testFilterAbove("One eliment and above thresshold", [5], 3, [5]);
  testFilterAbove("One eliment and bellow thresshold", [2], 3, []);
  testFilterAbove("One eliment and equal to thresshold", [3], 3, []);
  testFilterAbove("All above thresshold", [5, 6, 7, 8], 3, [5, 6, 7, 8]);
  testFilterAbove("All element bellow thresshold", [1, 2, 3], 4, []);
  testFilterAbove("All data mixed", [6, 2, 3, 1, 4, 7], 3, [6, 4, 7]);

}

testAll();