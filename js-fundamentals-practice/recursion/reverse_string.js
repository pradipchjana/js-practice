function first(sentence) {
  return sentence[0];
}

function rest(sentence) {
  let resultString = "";
  for (let index = 1; index < sentence.length; index++) {
    resultString = resultString + sentence[index];
  }
  return resultString;
}

function reverse(sentence) {
  if (sentence === '') return "";
  return reverse(rest(sentence)) + first(sentence);
}

function composeMessage(sentence, actual, expected) {
  const checkValue = actual === expected ? '✅' : '❌';
  const actualSection = "Answer: " + actual;
  const inputSection = "[" + sentence + "]";
  const expectedSection = " Expected: " + expected;
  let message = checkValue;
  message += inputSection;
  message += actualSection;
  message += expectedSection;

  console.log(message);

}

function testReverse(sentence, expected) {
  const result = reverse(sentence);
  composeMessage(sentence, result, expected);
}

function testAll() {
  testReverse("ab", "ba");
  testReverse("abc", "cba");
  testReverse("vikram", "markiv");
  testReverse('pradip', "pidarp");
}

testAll();
