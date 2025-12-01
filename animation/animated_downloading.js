let i = 0;
let random = 0
const randomNumberGenerator = (start, end) => {
 return start + Math.floor(Math.random() * (end - start));
}

const generateLine = length => "-".repeat(length);

const downloadingBar = (char, number, percentage, boundary) =>
  "Downloading" + drawBar(char,number % boundary,boundary)+ percentage + "%";

const drawBar = (char, numberOfTime, boundary, padChar = " ") =>
  char.repeat(numberOfTime).padEnd(boundary, padChar);

const statusBar = (char, padChar, number, boundary) =>
  "|" + drawBar(char,(number / 100) * 60, boundary, padChar) + "|";


const intervalId = setInterval(() => {
  console.clear();
  i = i + 1;
  console.log(downloadingBar(".", i, random, 5));
  generateLine(60);
  console.log(statusBar("#", "-", random, 60));
  generateLine(60);
  random= randomNumberGenerator(random, random+10)
  if (random >= 100) {
    console.clear();
    console.log("Successfully dowloaded✅");
    clearInterval(intervalId);
  }
},400)