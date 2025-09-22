let vowelIsland = 0;
let meadow = "queue";
for (let indexOfMeadow = 0; indexOfMeadow < meadow.length ; indexOfMeadow++) {
  
  if(meadow[indexOfMeadow]=== "a" || meadow[indexOfMeadow]=== "e" || meadow[indexOfMeadow]=== "i" || meadow[indexOfMeadow]=== "o" || meadow[indexOfMeadow]=== "u"){
    //console.log("Vowel islands:1",meadow[indexOfMeadow]);
    if(meadow[indexOfMeadow + 1]!== "a" && meadow[indexOfMeadow + 1] !== "e" && meadow[indexOfMeadow + 1]!== "i" && meadow[indexOfMeadow + 1]!== "o" && meadow[indexOfMeadow + 1]!== "u"){
      
      //console.log("Vowel islands:",meadow[indexOfMeadow]);
      vowelIsland = vowelIsland + 1;
    }
  }
  
}
console.log("Vowel island:",vowelIsland);
