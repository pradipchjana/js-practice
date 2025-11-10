/*
  Implement the below function to count number of vowels present in the
  give sentence.
  Examples:
  countVowels("hello world") returns 3
  countVowels("hEllo wOrld") returns 3
*/

function isVowel(letter) {
  const isA = letter === 'a' || letter === 'A';
  const isE = letter === 'e' || letter === 'E';
  const isI = letter === 'i' || letter === 'I';
  const isO = letter === 'o' || letter === 'O';
  const isU = letter === 'u' || letter === 'U';
  return isA || isE || isI || isO || isU;
}

function countVowels(sentence) {
  // Implementation here.
  let count = 0;
  for (let index = 0; index < sentence.length; index++) {
    if (isVowel(sentence[index])) {
      count = count + 1;
    }
  }
  return count;
}

function composeMessage(sentence, result, expected) {
  const checkValue = result === expected ? '✅' : '❌';
  const inputSection = "[" + sentence + "]";
  const actualSection = " Answer: " + result;
  const outputSection = " Expected: " + expected;
  let message = checkValue;
  message += inputSection;
  message += actualSection;
  message += outputSection;
  console.log(message);
}

function testCountVowels(sentence, expected) {
  const result = countVowels(sentence);
  composeMessage(sentence,result,expected);
}

function testAll() {
  testCountVowels("hello world", 3);
  testCountVowels("hEllo wOrld", 3);
  testCountVowels("aAbb", 2);
  testCountVowels('cdaeE', 3);
  testCountVowels('', 0);
  testCountVowels('bcdf', 0);

}

testAll();