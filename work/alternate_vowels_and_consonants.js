function isVowel(letter) {
  const isA = letter === 'a';
  const isE = letter === 'e';
  const isI = letter === 'i';
  const isO = letter === 'o';
  const isU = letter === 'u';

  return isA || isE || isI || isO || isU;
}

function findType(letter) {
  return isVowel(letter) ? 'v' : 'c';
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
      if (type === currType) {
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
  testSplitAWord('aeiou','a,e,i,o,u');
  testSplitAWord('aeioujklmn', 'aj,ek,il,om,un');
  testSplitAWord('apple', 'ape,p,l');
  testSplitAWord('bbaacdef', 'bacef,bad');
  testSplitAWord('aaabbb', 'ab,ab,ab');
  testSplitAWord('thoughtworks', 'togor,huh,t,w,k,s');
}

testAll();