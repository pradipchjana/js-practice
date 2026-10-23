const number = 8;//10101
const subString = 1;

let binary = 0;

let copyOfTheNumber = number;
let multiplier = 1;


let remainder;
//loop for binary
while(copyOfTheNumber >= 1) {
  remainder = copyOfTheNumber % 2;
  copyOfTheNumber = (copyOfTheNumber - remainder) / 2;
  binary = remainder * multiplier + binary;
  multiplier = multiplier * 10;
}
console.log(binary);

//find divisior

let nextTenDivisior = 1;
let checkSubString;
while(checkSubString !== subString){
  nextTenDivisior = nextTenDivisior * 10;
  checkSubString = subString % nextTenDivisior;
}

//pattern check 

let value = 0;
let answer = 0;
while(binary !== 0) {
    value = binary % nextTenDivisior;
    if(value === subString) {
        answer = answer + 1
    }
    remainder = binary % 10;
    binary = (binary - remainder) / 10
}
console.log(answer);

