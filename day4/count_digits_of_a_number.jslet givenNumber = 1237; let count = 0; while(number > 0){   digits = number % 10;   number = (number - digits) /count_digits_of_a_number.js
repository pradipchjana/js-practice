let givenNumber = 1237;
let count = 0;
let digits =0;
while(givenNumber > 0){
  digits = givenNumber % 10;
  givenNumber = (givenNumber - digits) / 10;
  count++;
  //console.log(digits);

}
console.log("Number of digits is",count);


