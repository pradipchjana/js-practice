function generateNumber() {
  return Math.floor(Math.random() * 100);
}

function guessNumber(number, noOfChance = 5) {
  const choiceString = prompt("Enter your number(1-100)");
  const choice = parseInt(choiceString);
  if (noOfChance === 0) {
    console.log("You Loose! ", number);
    return;
  }
  if (choice === number) {
    console.log("Yeah,You Win");
    return;
  }
  if (choice > number) {
    console.log("Too high");
  }
  console.log("Try Again");
  
  guessNumber(number, noOfChance - 1);
}

function findNumber() {
  const randomNumber = generateNumber();
  guessNumber(randomNumber);
}

function play() {
  findNumber();
}

play();