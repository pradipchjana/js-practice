// Do not rename n, use it as input for your program.
// While testing we will change their values.
// N will be always 1 or greater.
const n = 1;

// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let currentTerm = 0;
let nextTerm = 1;


for (let count = 1; count < n; count++) {
  nextTerm = currentTerm + nextTerm;
  currentTerm = nextTerm - currentTerm;
}

console.log(currentTerm);