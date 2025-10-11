const WORDS = ['apple', 'banana', 'ball'];

function bgRed(text) {
  return "\x1B[41m" + text + "\x1B[0m";
}

function delay() {
  let index = 0;
  while (index < 1_00_0000000) {
    index++;
  }
}

function generateWord() {
  const indexOfWord = Math.floor(Math.random() * 3);
  return WORDS[indexOfWord];
}

 function play() {
  const confirmation = confirm("Are you ready?");
  if (confirmation) {
    const word = generateWord();
    console.log("Now you have some seconds to memorize it....");
    console.log("It is your word", bgRed(word));
    delay();
    console.clear();
    defuse(word);
  }
}

function defuse(word) {
  const inputWord = prompt("Now your turn,Think clearly:");
  if (inputWord === word) {
    console.log("Yeah, You did it.");
    console.log("Another bomb needs to defuse");
    return play();
  }
  console.log("Oh, You couldn't defuse the bomb.");
  console.log("Don't upset,You can do it in next time. So,");
  return play();
}

console.log("A word will be shown, you have to remember it and type it.");

play();
