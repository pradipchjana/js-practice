/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisibleBy3(number) {
  return number % 3 === 0;
}

function isDivisibleBy5(number) {
  return number % 5 === 0;
}

function fizzBuzz(number) {
  let result = '';

  if (isDivisibleBy3(number)) {
    result = result + "fizz";
  }

  if (isDivisibleBy5(number)) {
    result = result + "buzz";
  }

  return result === '' ? result + number : result;
}

function testFizzBuzz(givenNumber, expected) {
  const result = fizzBuzz(givenNumber);
  const checkValue = result === expected ? "✅" : "❌";

  console.log(checkValue, "expectation : ", expected, "and answer: ", result);
}

function testAll() {
  testFizzBuzz(3, "fizz");
  testFizzBuzz(4, "4");
  testFizzBuzz(5, "buzz");
  testFizzBuzz(15, "fizzbuzz");
  testFizzBuzz(30, "fizzbuzz");
  testFizzBuzz(20, "buzz");
  testFizzBuzz(0, "fizzbuzz");
}

testAll();
