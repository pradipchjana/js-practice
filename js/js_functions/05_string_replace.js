/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function replace(text, match, replacement) {
  let newString = "";
  for (let index = 0; index < text.length; index++) {
    if (text[index] === match) {
      newString = newString + replacement;
    } else {
      newString = newString + text[index];
    }
  }
  return newString;
}

function testReplace(givenText, character, replacement, expected) {
  const result = replace(givenText, character, replacement);
  const checkValue = result === expected ? "✅" : "❌";

  console.log(checkValue, " Answer ", result, "and Expected", expected);
}

function testAll() {
  testReplace('hello world', 'l', 'n', 'henno wornd');
  testReplace('', 'd', 'e', '');
  testReplace('has', 's', 'd', 'had');
  testReplace('pradip', 'a', 'o', 'prodip');
  testReplace('fought', 'f', 't', 'tought');
  testReplace('pradip chandra jana', ' ', '_', 'pradip_chandra_jana');
  testReplace('ab', 'a', 'b', 'bb');
}

testAll();
