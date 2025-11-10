// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
// do not modify input parameters

function mapLengths(words) {
  const newArray = [];
  for (let index = 0; index < words.length; index++) {
    newArray[index] = words[index].length;
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

function testMapLengths(type, array, expected) {
  const result = mapLengths(array);
  composeMessage(type, array, result, expected);
}

function testAll() {
  testMapLengths("One words in a Array", ['ABCD'], [4]);
  testMapLengths("Two Words in a Array", ["p", "##"], [1, 2]);
  testMapLengths("Three Words in a Array", ["apple", "cat", "Four"], [5, 3, 4]);

}

testAll();