/*
  Implement the below function to replace every run of adjacent SPACE(" ")
  characters with a single SPACE in the given sentence.

  Rules:
  - Consider only the plain SPACE character (" "). Any contiguous sequence
    of one or more SPACE characters should become a single SPACE.
  - Leading and trailing runs of spaces are also collapsed to a single space.
  - Do NOT modify other whitespace characters: TAB("\t") and NEW LINE("\n")
    must remain exactly as they are.
  - Runs of spaces that are separated by other characters (including \t or \n)
    are treated separately and each such run is collapsed independently.

  Examples:
  removeAdjacentDuplicateSpaces("statement      with    two spaces")
    -> "statement with two spaces"
    (multiple spaces between words collapsed to single spaces)

  removeAdjacentDuplicateSpaces("   hello   world   ")
    -> " hello world "
    (leading/trailing runs collapsed to single leading/trailing space)
*/


function removeAdjacentDuplicateSpaces(sentence) {
  let resultString = "";

  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== " ") {
      resultString += sentence[index];

    }
    if (sentence[index] === ' ' && sentence[index + 1] !== " ") {

      resultString += " ";
    }
  }
  return resultString;
}

function composeMessage(sentence, result, expected) {
  const checkValue = result === expected ? '✅' : '❌';
  const inputSection = "[" + sentence + "]";
  const actualSection = " Answer: " + result;
  const outputSection = "Expected: " + expected;
  let message = checkValue;
  message = message + inputSection;
  message = message + actualSection;
  message = message + outputSection;

  console.log(message);
}

function testremoveSpace(sentence, expected) {
  const result = removeAdjacentDuplicateSpaces(sentence);
  composeMessage(sentence, result, expected);
}

function testAll() {
  testremoveSpace('   ab', " ab");
  testremoveSpace(' ab', " ab");
  testremoveSpace('  abc  ', " abc ");
  testremoveSpace("    \n \t hello world \t   \n  ", " \n \t hello world \t \n ");
  testremoveSpace('  aa     b', " aa b");
  testremoveSpace('bcdf', 'bcdf');
  testremoveSpace('    \t  \t', ' \t \t');
  testremoveSpace("  \n  ab  cd ", ' \n ab cd ');
  testremoveSpace("        aA  \t\tbb   ", ' aA \t\tbb ');

}

testAll();