let meadow = "boom";
let vowelIsland = 0;
for (let indexOfMeadow = 0; indexOfMeadow < meadow.length; indexOfMeadow++) {
  
  if(meadow[indexOfMeadow]=== "a" || meadow[indexOfMeadow]=== "e" || meadow[indexOfMeadow]=== "i" || meadow[indexOfMeadow]=== "o" || meadow[indexOfMeadow]=== "u"){
    vowelIsland = vowelIsland + 1;
  }
  
}
console.log("Vowel islands:",vowelIsland);
