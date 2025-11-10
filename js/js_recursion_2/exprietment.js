let aString = "      Hi Hello,\n My name is Pradip\n       "
let trimString = aString.trim();
let upperCase = trimString.toUpperCase();
let sliceHi = upperCase.slice(0, 2);
let repeatHi = sliceHi.repeat(3);

let repeatHi2 = aString.trim().toUpperCase().slice(0, 2).repeat(3);

console.log(repeatHi);
console.log(repeatHi2);