// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters
function findFibonacci(term) {
  let currentTerm = 0;
  let nextTerm = 1;

  for (let count = 1; count < term; count++) {
    nextTerm = currentTerm + nextTerm;
    currentTerm = nextTerm - currentTerm;
  }
  return currentTerm;
}

function fibonacci(end) {
  const newArray = [];
  for (let index = 1; index <= end; index++) {
    newArray.push(findFibonacci(index));
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

function testFibonacci(type, end, expected) {
  const result = fibonacci(end);
  composeMessage(type, end, result, expected);
}

function testAll() {
  testFibonacci("For 1", 1, [0]);
  testFibonacci("For 2", 2, [0, 1]);
  testFibonacci("For 3", 3, [0, 1, 1]);
  testFibonacci("For 4", 4, [0, 1, 1, 2]);
  testFibonacci("For 5", 5, [0, 1, 1, 2, 3]);

}

testAll();