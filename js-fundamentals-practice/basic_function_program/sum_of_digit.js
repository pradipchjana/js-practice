function sum(x,y) {
  return x + y;
}

function sumOfDigits(x) {
  let total = 0; 
  let number = x;
  while (number > 0){
    const remainder = number % 10;
    number = (number - remainder) /10;
    total = sum(total,remainder);
  }
  return total;
}


console.log(sumOfDigits(123));
