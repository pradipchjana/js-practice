let number = 123;
//let  =0;
let digits = 0;
while(number > 0){
  digits = number % 10;
  number = (number - digits) / 10;
  console.log(digits);

}
