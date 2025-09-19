let decimalNumber = 6;
let binary = 0;
let remainder = 0;
let multiplier = 1;
while(decimalNumber >= 1) {
  remainder = decimalNumber % 2;
  decimalNumber = (decimalNumber - remainder) / 2;
  binary = remainder * multiplier + binary;
  multiplier = multiplier * 10;
}
console.log(binary);
