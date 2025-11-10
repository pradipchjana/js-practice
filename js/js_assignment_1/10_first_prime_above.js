// Do not rename a, use it as input for your program.
// While testing we will change its values.

const a = 0;

// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// Example: If a = 13, then the output should be 17

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let floorLimit = a;
let isPrime = false;

while (isPrime === false) {
  floorLimit = floorLimit + 1;
  let count = 2;
  let isDivisible = false;
  while ((isDivisible === false) && (count < floorLimit)) {
    isDivisible = floorLimit % count === 0;
    count = count + 1;
  }
  isPrime = isDivisible === false;
}

console.log(floorLimit);


