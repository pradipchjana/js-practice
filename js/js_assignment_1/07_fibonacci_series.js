// Do not rename n, use it as input for your program.
// While testing we will change their values.
// n will be a natural number including 0.

const n = 7;

// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let currentTerm = 0;
let nextTerm = 1;

for (let count = 0; count < n; count++) {
  console.log(currentTerm);
  nextTerm = currentTerm + nextTerm;
  currentTerm = nextTerm - currentTerm;
}

