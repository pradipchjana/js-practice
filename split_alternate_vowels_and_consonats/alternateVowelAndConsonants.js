function isVowel(letter) {
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    return true;
  }

  return false;
}

function findType(letter) {
  return isVowel(letter) === true ? 'v' : 'c';
}

function splitAWord(string) {
  let type = findType(string[0]);
  let front = string[0];
  let back = '';
  for (let index = 1; index < string.length; index++) {
    const currType = findType(string[index]);
    const isSameType = type === currType;
    if (isSameType) {
      back = back + ',' + string[index];
    } else {
      front = front + string[index];
    }
    type = currType;
  }
  const result = front + back
  return result;
}

function display(actual, string, expected) {
  const check = actual === expected ? '✅' : '❌';
  const inputFragment = "[" + string + "]";
  const expectedFragment = " Expected: " + expected;
  const actualFragment = ' Actual: ' + actual;
  const message = check + inputFragment + expectedFragment + actualFragment;
  console.log(message);
}

function testSplitAWord(string, expected) {
  const actual = splitAWord(string);
  display(actual, string, expected);
}

function testAll() {
  testSplitAWord('a', 'a');
  testSplitAWord('ab', 'ab');
  testSplitAWord('ba', 'ba');
  testSplitAWord('abe', 'abe');
  testSplitAWord('abc', 'ab,c');
  testSplitAWord('acb', 'ac,b');
  testSplitAWord('cba', 'ca,b');
  testSplitAWord('cab', 'cab');
  testSplitAWord('abcd', 'ab,c,d');
  testSplitAWord('bacd', 'bac,d');
  testSplitAWord('bcad', 'bad,c');
  testSplitAWord('abcde', 'abe,c,d');
  testSplitAWord('apple', 'ape,p,l');
}

testAll();
