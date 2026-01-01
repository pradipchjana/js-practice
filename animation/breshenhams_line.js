const screen = Array.from(
  { length: 8 },
  () => Array.from({ length: 8 }, () => "  "),
);

const plotPixel = (x1, y1, x2, y2, dx, dy, decide) => {
  let pk = 2 * dy - dx;
  for (let i = 0; i <= dx; i++) {
    if (decide == 0) {
      screen[x1][y1] = "**"
    } else {
      screen[y1][x1] = "*";
    }

    if (x1 < x2) {
      x1++;
    } else {
      x1--;
    }

    if (pk < 0) {
      if (decide == 0) {
        pk = pk + 2 * dy;
      } else {
        pk = pk + 2 * dy;
      }
    } else {
      if (y1 < y2) {
        y1++;
      } else {
        y1--;
      }
      pk = pk + 2 * dy - 2 * dx;
    }
  }
};

let x1 = 0, y1 = 1, x2 = 5, y2 = 5, dx, dy;
dx = Math.abs(x2 - x1);
dy = Math.abs(y2 - y1);

if (dx > dy) {
  plotPixel(x1, y1, x2, y2, dx, dy, 0);
} else {
  plotPixel(y1, x1, y2, x2, dy, dx, 1);
}

// const printScreen = (screen) => {
//   for (let x = 0; x < screen.length; x++) {
//     console.log(screen[x].join(""),"|");
//   }
// };

const printScreen = () =>
  console.log(screen.map((row) => row.join("")).join("\n"));

printScreen();
