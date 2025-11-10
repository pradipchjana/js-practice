// Do not rename a, use it as input for your program.
// While testing we will change its values.

const a = 11;

// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let currentNumber = a;
let numberForDivision = 2;

while (numberForDivision <= a) {
  if (currentNumber % numberForDivision === 0) {
    console.log(numberForDivision);
    currentNumber = currentNumber / numberForDivision;
  } else {
    numberForDivision = numberForDivision + 1;
  }
}