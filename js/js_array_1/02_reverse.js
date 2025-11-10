// Given an array return reverse of array. DO NOT USE `.reverse()` function
// Write your own implementation of reverse
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters
function reverse(array) {
  const newArray = [];
  const lastIndex = array.length - 1;
  for (let index = 0; index < array.length; index++) {
    newArray[index] = array[lastIndex - index];
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

function composeMessage(type, array, result, expected) {
  const isPass = areEqual(result, expected);
  const checkValue = isPass ? '✅' : '❌';
  const inputSection = "\n[" + array + "]";
  const actualSection = "\n Answer: " + result;
  const outputSection = "\n Expected: " + expected;
  let message = checkValue + " " + type;
  message += isPass ? "" : inputSection;
  message += isPass ? "" : actualSection;
  message += isPass ? "" : outputSection;
  console.log(message);
}

function testReverse(type, array, expected) {
  const result = reverse(array);
  composeMessage(type, array, result, expected);
}

function testAll() {
  testReverse("one element ", [1], [1]);
  testReverse("Two element ", [1, 2], [2, 1]);
  testReverse("Three element ", [1, 2, 3], [3, 2, 1]);
  testReverse("Empty array", [], []);

}

testAll();