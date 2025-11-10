// Do not rename p, t or r, use them as input for your program.
// While testing we will change their values.

const p = 0;
const t = 1;
const r = 2;

// Print the compound interest.
// Do not use compound interest formula to calculate the compound interest.
// Use simple interest formula and a loop to calculate the compound interest.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let totalAmount = p;
let simpleInterest = 0;

for (let year = 1; year <= t ; year++) {
  simpleInterest = (totalAmount * r ) / 100;
  totalAmount = totalAmount + simpleInterest; 
}

const compoundInterest = totalAmount - p;
console.log("Compund Interest:",compoundInterest);