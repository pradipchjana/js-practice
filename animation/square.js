const drawOnBar = (screen, row) => {
  const colors = ["🟥", "🟧", "🟨", "🟩"];

   for (let index = row; index < screen.length - row; index++) { 
     screen[row][index] = colors[row %4];
     screen[index][row] = colors[row %4];
     screen[screen.length -row - 1][index] = colors[row %4];
     screen[index][screen.length -row-1] = colors[row %4];
  }
};

const decidePattern = (screen, row) => {
  if (row >= screen.length / 2) drawOnBar(screen, screen.length - row);
  drawOnBar(screen, row)
}


const clearScreen = (screen) => {
  for (const i in screen) {
    for (const j in screen) {
      screen[i][j] = "  ";
    }
  }
};

const showScreen = (screen) => screen.map((row) => row.join("")).join("\n");

const animate = (length) => {
  let x = -1;
  const generateRow = (length) => " ".repeat(length).split("");
  const HEADER = generateRow(length).map(() => generateRow());

  setInterval(() => {
    x = (x + 1) % length;
    console.clear();
    clearScreen(HEADER);
    decidePattern(HEADER, x); 
    console.log(showScreen(HEADER));

  }, 300);
};

animate(13);