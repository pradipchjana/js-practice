const givenString = "madam";
const lengthOfString = givenString.length;
let reverseString = "";

let indexCounter = 1;
while (reverseString.length < lengthOfString ) {
  reverseString = reverseString + givenString[lengthOfString - indexCounter];
  indexCounter = indexCounter + 1;
}
//console.log(reverseString);

const isPalindrome = (givenString === reverseString) ? "is palindrome" : "is not palindrome";
console.log(givenString,isPalindrome);