// Do not rename a, use it as input for your program.
// While testing we will change their values.
// a will be always 1 or greater.
const givenNumber = 1;

// Print true(boolean) if a is prime otherwise print false(boolean). DO NOT print "true" or "false".
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let count = 2;
let isPrime = true;

while (isPrime && count < givenNumber) { 
  isPrime = !(givenNumber % count === 0);
  count = count + 1;
}
console.log(isPrime);
