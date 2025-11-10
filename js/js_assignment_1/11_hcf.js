// Do not rename a or b, use them as input for your program.
// While testing we will change their values.

const a = 1;
const b = 0;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let smallestNumber = a < b ? a : b;
let hcf = 1;
let hasFactor = false;

while ((smallestNumber > 0) && (hasFactor === false)) {
  hasFactor = (a % smallestNumber === 0) && (b % smallestNumber === 0);
  hcf = smallestNumber;
  smallestNumber = smallestNumber - 1;
}

console.log(hcf);
