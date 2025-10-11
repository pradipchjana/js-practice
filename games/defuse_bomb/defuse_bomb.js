const MEDIUM_WORDS = [
  "ACCOMMODATE",
  "NECESSARY",
  "EMBARRASS",
  "COMMITTEE",
  "MILLENNIUM"
]


const HARD_WORDS = [
  "RHYTHM",
  "QUICKENING",
  "JUXTAPOSITION",
  "TSUNAMI",
  "KALEIDOSCOPE"
]


const EXPERT_WORDS = [
  "PNEUMONIA",
  "SACRILEGIOUS",
  "WORCESTERSHIRE",
  "ZEPHYR",
  "GNOMONIC"
]


function bgRed(text) {
  return "\x1B[41m" + text + "\x1B[0m";
}

function delay() {
  let index = 0;
  while (index < 1_00_0000000) {
    index++;
  }
}

function generateWord(words) {
  const indexOfWord = Math.floor(Math.random() * words.length);
  return words[indexOfWord];
}

function defuse(word, words) {
  const inputWord = prompt("Now your turn,Think clearly:");
  if (inputWord === word) {
    console.log("Yeah, You did it.");
    console.log("Another bomb needs to defuse");
    return play(words);
  }
  console.log("Oh, You couldn't defuse the bomb.");
  console.log("Don't upset,You can do it in next time. So,");
  return play(words);
}

function play(words) {
  const confirmation = confirm("Are you ready?");
  if (confirmation) {
    const word = generateWord(words);
    console.log("Now you have some seconds to memorize it....");
    console.log("It is your word", bgRed(word));
    delay();
    console.clear();
    defuse(word, words);
  }
}

function start(args) {
  console.log("A word will be shown, you have to remember it and type it.");
  const level = parseInt(args[0]);
  switch (level) {
    case 1:
      return play(MEDIUM_WORDS);
    case 2:
      return play(HARD_WORDS);
    case 3:
      return play(EXPERT_WORDS);
  }  
  console.log("You Entered Wrong level.");

}

start(Deno.args);
