function splitAWord(string) {
 return string;
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
}

testAll();
