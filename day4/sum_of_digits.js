const number = 78;
let copyOfTheNumber = number;
let sumOfDigits = 0;
let remainder = 0;

while(copyOfTheNumber > 0){
  remainder = copyOfTheNumber % 10;
  sumOfDigits = sumOfDigits + remainder;
  copyOfTheNumber = (copyOfTheNumber - remainder) / 10;
}



console.log("sum of all digits in",number,"is",sumOfDigits);
