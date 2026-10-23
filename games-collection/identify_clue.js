const CLUES = [
  "The average raindrop falls at about seven miles per hour",
  "The sun is actually a star not a planet",
  "The strongest human muscle is the masseter which is in the jaw",
  "Honey is the only food that never spoils",
  "Nepal is the only country with a non-rectangular national flag"
]

function red(text) {
  return "\x1B[31m" + text + "\x1B[0m";
}

function green(text) {
  return "\x1B[32m" + text + "\x1B[0m";
}

function generateNumber(length) {
  return Math.floor(Math.random() * length);
}

function mixed(words) {
  for (let index = words.length - 1; index > 0; index--) {
    const term = generateNumber(index);
    const temp = words[index];
    words[index] = words[term];
    words[term] = temp;
  }
  return words;
}

function play() {
  const sentence = CLUES[generateNumber(CLUES.length)];
  const words = sentence.split(" ");
  const mixedWords = mixed(words);
  console.log(mixedWords.join(" "));
  const userResponse = prompt("Enter Your response:");
  if (userResponse.toLowerCase() === sentence.toLowerCase()) {
    console.log(green("You Win!!!!"));
    return;
  }
  console.log(red("You loose"));
  console.log(sentence);

}

play();