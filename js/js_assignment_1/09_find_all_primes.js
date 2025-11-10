// Do not rename startOfRange or endOfRange, use them as input for your program.
// While testing we will change their values.

const startOfRange = 1;
const endOfRange = 13;

// Print all prime numbers between startOfRange and endOfRange(both inclusive).
// For example, if startOfRange = 5 and endOfRange = 13, then the output should be
// 5
// 7
// 11
// 13
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const startingPoint = startOfRange < 2 ? 2 : startOfRange;

for (let start = startingPoint; start <= endOfRange; start++) {
  let count = 2;
  let isPrime = true;
  while (isPrime && count < start){
    isPrime = !(start % count === 0);
    count = count + 1;
  }
  if (isPrime) {
    console.log(start);
  }
}



