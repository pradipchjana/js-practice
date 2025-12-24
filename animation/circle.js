const screen = (side) =>
  Array.from({ length: side }, () => Array.from({ length: side }, () => "  "));

const isInCircle = (x, y) => Math.sqrt(x * x + y * y) <= 30;

const getCiclePoint = (screen) => {
  for (let x = -37; x < screen.length; x++) {
    for (let y = -37; y < screen.length; y++) {
      if (isInCircle(x, y)) {
        screen[x + 38][y + 38] = " .";
      }
    }
  }
};

const printScreen = (screen) => {
  getCiclePoint(screen);
  for (let x = 0; x < screen.length; x++) {
    console.log(screen[x].join(""),"|");
  }
};


const drawMinute = (screen) => {
  setInterval(() => {
    
  },1000)
}

printScreen(screen(78));
