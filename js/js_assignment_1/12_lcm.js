// Do not rename a or b, use them as input for your program.
// While testing we will change their values.
// a and b will be always 0 or greater.
const a = 6;
const b = 15;

// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let smallestNumber = a < b ? a : b;
let hcf = 1;
let hasFactor = false;

while ((smallestNumber > 0) && (hasFactor === false)) {
  hasFactor = (a % smallestNumber === 0) && (b % smallestNumber === 0);
  hcf = smallestNumber;
  smallestNumber = smallestNumber - 1;
}

const lcm = (a * b) / hcf;
console.log(lcm);