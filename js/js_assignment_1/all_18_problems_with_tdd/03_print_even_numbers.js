function convertToEven(s) {
  return s % 2 !== 0 ? s+ 1 : s;
}

function printEven(startOfTheRange, endOfTheRange) {
  let listOfEven = "";
  for (let evenNumber = convertToEven(startOfTheRange); evenNumber <= endOfTheRange; evenNumber+=2) {
    listOfEven = listOfEven + evenNumber + " ";
  }
  return listOfEven;
}

function testEvenNumbers(start, end, expextedValue) {
  const result = printEven(start, end);
  const checkResult = (result === expextedValue) ? "✅" : "❌";

  console.log(checkResult, expextedValue ,result);
}
function testAll() {
  testEvenNumbers(1, 4, "2 4 ");
  testEvenNumbers(1, 8, "2 4 6 8 ");
  testEvenNumbers(0, 6, "0 2 4 6 ");
  testEvenNumbers(3, 11, "4 6 8 10 ");
}

testAll();
