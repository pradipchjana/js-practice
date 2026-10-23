const input = 3;
let factorial = 1;
let count = 0;

while(count < input){
  count = count + 1
  factorial = factorial * count;
}

console.log("Factorial of",input,"is",factorial);
