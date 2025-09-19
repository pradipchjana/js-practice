//greater in 3 numbers
let firstNumber = 2
let secondNumber = 4
let thirdNumber = 9
const suffix = "is greater"

if((thirdNumber < firstNumber) && (secondNumber < firstNumber)) {
    console.log(firstNumber,suffix);
    
}else if(secondNumber < thirdNumber){
    console.log(thirdNumber,suffix);
    
}else {
    console.log(secondNumber,suffix); 
}

// ÷let greaterNumber = ((thirdNumber < firstNumber) && (secondNumber < firstNumber)) ? 
