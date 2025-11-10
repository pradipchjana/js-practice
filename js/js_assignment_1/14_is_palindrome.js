// Do not rename a, use them as input for your program.
// While testing we will change its values.

const a = 1245;

// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let currentNumber = a;
let reverseNumber = 0;
let remainder = 0;

while (currentNumber !== 0) {
  remainder = currentNumber % 10;
  currentNumber = (currentNumber - remainder) / 10;
  reverseNumber = (reverseNumber * 10) + remainder;
}

const isPalindrome = reverseNumber === a;
console.log(isPalindrome);
