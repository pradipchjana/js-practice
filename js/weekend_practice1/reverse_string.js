const givenString = "javascript";
const lengthOfString = givenString.length;
let reverseString = "";

let indexCounter = 1;
//console.log(givenString[lengthOfString - indexCounter]);
while (reverseString.length < lengthOfString ) {
  reverseString = reverseString + givenString[lengthOfString - indexCounter];
  indexCounter = indexCounter + 1;

}
console.log("reverse string of",givenString,"is",reverseString);


