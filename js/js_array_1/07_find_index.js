// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters
function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
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

function testFindIndex(type, array, element, expected) {
  const result = findIndex(array, element);
  composeMessage(type, array, element, result, expected);
}

function testAll() {
  testFindIndex("One eliment in array", ["pradip"], "pradip", 0);
  testFindIndex("Two element in array ", ["kp", "Ab", "cd", "Ab"], "Ab", 1);
  testFindIndex("Repeated element", ["a", 'b', 'b', 'b'], 'b', 1);
  testFindIndex("Not present", ['ab', 'cd', 'kc', 'pm'], 'cm', -1);

}

testAll();