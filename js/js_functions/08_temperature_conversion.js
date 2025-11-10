/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function celciousToFahernheit(celcious) {
  return ((9 / 5) * celcious) + 32;
}

function fahrenheitToCelcious(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function kelvinToCelcious(kelvin) {
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
  return celciousToFahernheit(kelvin - 273.15);
}

function celciousToKelvin(celcious) {
  return celcious + 273.15;
}

function fahrenheitToKelvin(farenheit) {
  return fahrenheitToCelcious(farenheit) + 273.15;
}

function isApproximate(number, expected) {
  const difference = number < expected ? number - expected : expected - number;
  return difference < 0.5;
}

function convert(from, to, value) {
  const conversion = from + to;
 
  value = value - 0;
  
  switch (conversion) {
    case 'CF':
      return celciousToFahernheit(value);
    case 'CK':
      return celciousToKelvin(value);
    case 'KF':
      return kelvinToFahrenheit(value);
    case 'FK':
      return fahrenheitToKelvin(value);
    case 'FC':
      return fahrenheitToCelcious(value);
    case 'KC':
      return kelvinToCelcious(value);
    default:
      return value;
  }
}

function testConvert(from, to, value, expectedOutput) {
  const result = convert(from, to, value);
  const checkValue = isApproximate(result, expectedOutput) ? "✅" : "❌";

  console.log(checkValue, " Answer ", result, "and Expected ", expectedOutput);
}
function testAll() {
  testConvert('C', 'K', 0, 273.15);
  testConvert('C', 'F', 37, 98.6);
  testConvert('F', 'K', 98.6, 310.15);
  testConvert('F', 'C', -40, -40);
  testConvert('K', 'C', 100, -173.15);
  testConvert('K', 'F', 100, -279.67);
  testConvert('K', 'K', 100, 100);
  testConvert('F', 'K', 0, 255.37);
  testConvert('K', 'F', 'a', NaN);
}

testAll();