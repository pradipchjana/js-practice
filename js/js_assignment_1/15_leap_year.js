// Do not rename year, use it as input for your program.
// While testing we will change its values.

const year = 2023;

// Print true if the year is a leap year otherwise print false.
// Printing more than one output or printing anything other than leap year or not leap year might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const isDivisibleBy4 = year % 4 === 0;
const isNotDivisibleBy100 = year % 100 !== 0;
const isDivisibleBy400 = year % 400 === 0;

const isLeapYear = (isDivisibleBy4 && isNotDivisibleBy100) || isDivisibleBy400;

console.log(isLeapYear);