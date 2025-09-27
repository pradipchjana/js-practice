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
  let text = string;
  let result = '';
  while (text.length > 0) {

    let type = findType(text[0]);
    let front = text[0];
    let back = '';
    for (let index = 1; index < text.length; index++) {
      const currType = findType(text[index]);
      const isSameType = type === currType;
      if (isSameType) {
        back = back + text[index];
      } else {
        front = front + text[index];
      }
      type = currType;
    }

    text = back;
    const separator = back.length >= 1 ? "," : "";
    result = result + front + separator;
  }
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
  testSplitAWord('bbaacdef', 'bacef,bad');
  testSplitAWord('aaabbb', 'ab,ab,ab');
  testSplitAWord('thoughtworks', 'togor,huh,t,w,k,s');
}

testAll();
