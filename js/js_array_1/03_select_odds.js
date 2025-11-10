// Given an array of numbers return a new array containing only 
// odd elements of the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.



function selectOdds(numbers) {
  const newArray = [];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
      newArray.push(numbers[index]);
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

function testSelectOdds(type, array, expected) {
  const result = selectOdds(array);
  composeMessage(type, array, result, expected);
}

function testAll() {
  testSelectOdds("Only one elements and this is odd", [3], [3]);
  testSelectOdds("Only one elements and this is even", [2], []);
  testSelectOdds("Only two elements and with odd even", [2, 3], [3]);
  testSelectOdds("Only two elements and all odd", [5, 3], [5, 3]);
  testSelectOdds("Only two elements and all even", [2, 6], []);
  testSelectOdds("All odd even mixed", [3, 2, 4, 5, 7], [3, 5, 7]);

}

testAll();