
function isDivisibleByFour(year) {
  return year % 4 === 0;
} 

function isNotDivisibleBy100(year) {
  return year % 100 !== 0;
} 

function isDivisibleBy400(year) {
  return year % 400 === 0;
} 

function sumOfAp(year) {
  return (isDivisibleByFour(year) && isNotDivisibleBy100(year)) || isDivisibleBy400(year);
} 

function testSumOfAP(year, expextedValue) {
  const leapYear = sumOfAp(year);
  const checkResult = leapYear === expextedValue ? "✅" : "❌";
  console.log(checkResult, year, expextedValue, leapYear);
}

function testAll() {
  testSumOfAP(1600, true);
  testSumOfAP(2023, false);
  testSumOfAP(2024, true);
  testSumOfAP(1500, false);
  testSumOfAP(1244, true);
}

testAll();