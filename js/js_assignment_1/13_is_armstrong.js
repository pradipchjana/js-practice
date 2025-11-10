// Do not rename a use it as input for your program.
// While testing we will change its values.

const a = 1604;

// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let power = 0;
let currentNumber = a;
let remainder = 0;

while (currentNumber !== 0) {
  remainder = currentNumber % 10;
  currentNumber = (currentNumber - remainder) / 10;
  power = power + 1;
}

let armstrong = 0;
currentNumber = a;
while (currentNumber !== 0) {
  remainder = currentNumber % 10;
  currentNumber = (currentNumber - remainder) / 10;
  armstrong = armstrong + (remainder ** power);
}

const isArmstrong = armstrong === a;
console.log(isArmstrong);
