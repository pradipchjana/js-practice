// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters

function reverseFibonacci(end) {
  const newArray = [];
  let currentTerm = 0;
  let nextTerm = 1;
  
  for (let count = 1; count <= end; count++) {
    newArray.unshift(currentTerm);
    nextTerm = currentTerm + nextTerm;
    currentTerm = nextTerm - currentTerm;
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

function composeMessage(type, end, result, expected) {
  const isPass = areEqual(result, expected);
  const checkValue = isPass ? '✅' : '❌';
  const inputSection = "\n[" + end + "]";
  const actualSection = "\n Answer: " + result;
  const outputSection = "\n Expected: " + expected;
  let message = checkValue + " " + type;
  message += isPass ? "" : inputSection;
  message += isPass ? "" : actualSection;
  message += isPass ? "" : outputSection;
  console.log(message);
}

function testReverseFibonacci(type, end, expected) {
  const result = reverseFibonacci(end);
  composeMessage(type, end, result, expected);
}

function testAll() {
  testReverseFibonacci("For 1", 1, [0]);
  testReverseFibonacci("For 2", 2, [1, 0]);
  testReverseFibonacci("For 3", 3, [1, 1, 0]);
  testReverseFibonacci("For 4", 4, [2, 1, 1, 0]);
  testReverseFibonacci("For 5", 5, [3, 2, 1, 1, 0]);

}

testAll();