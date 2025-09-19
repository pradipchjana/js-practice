
// i want to check Prime number 
let number = 32
let count = 2;
let isPrime = true;
while (isPrime && count < number){
   if(number % count === 0){
    isPrime = false;
   }
   count = count + 1;
}

// if(isPrime) {
//     console.log("It is Prime Number");
    
// }else{
//     console.log("It is not Prime Number");
    
// }

const suffix = isPrime ? "is Prime Number" : "is Composite";
console.log(number,suffix);
