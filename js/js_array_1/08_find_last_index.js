// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters
function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {
    if (array[index] === element) {
      return index;
    }
  }
  return -1;
}

function composeMessage(type, array, element, result, expected) {
  const isPass = result === expected;
  const checkValue = isPass ? '✅' : '❌';
  const inputSection = "\n[" + array + " || " + element + "]";
  const actualSection = "\n Answer: " + result;
  const outputSection = "\n Expected: " + expected;
  let message = checkValue + " " + type;
  message += isPass ? "" : inputSection;
  message += isPass ? "" : actualSection;
  message += isPass ? "" : outputSection;
  console.log(message);
}

function testFindLastIndex(type, array, element, expected) {
  const result = findLastIndex(array, element);
  composeMessage(type, array, element, result, expected);
}

function testAll() {
  testFindLastIndex("One eliment in array", ["pradip"], "pradip", 0);
  testFindLastIndex("Two element in array ", ["kp", "Ab", "d", "Ab"], "Ab", 3);
  testFindLastIndex("Repeated element", ["a", 'b', 'b', 'b'], 'b', 3);
  testFindLastIndex("Not present", ['ab', 'cd', 'kc', 'pm'], 'cm', -1);

}

testAll();