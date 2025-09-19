let numberOfSteps = 6;
let firstTerm = 1;
let secondTerm = 0;
let fibonacci = 0;

for(let index = 0; index < numberOfSteps; index++){
  fibonacci = firstTerm + secondTerm;
  firstTerm = secondTerm ;
  secondTerm =fibonacci;
}
console.log("fibonacci in ",numberOfSteps,"is",fibonacci);

