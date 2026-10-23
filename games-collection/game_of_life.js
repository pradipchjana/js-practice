// const grid = [
// ["  ","  ","  ","  ","🟨","🟨","🟨","  ","🟨","🟨","🟨","  ","  ","  ","  "],
// ["  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  "],
// ["  ","  ","  ","🟨","  ","  ","  ","🟨","  ","  ","  ","🟨","  ","  ","  "],
// ["  ","  ","🟨","🟨","  ","  ","  ","🟨","  ","  ","  ","🟨","🟨","  ","  "],
// ["🟨","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","🟨"],
// ["🟨","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","🟨"],
// ["🟨","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","🟨"],
// ["  ","  ","🟨","🟨","🟨","  ","  ","  ","  ","  ","🟨","🟨","🟨","  ","  "],
// ["🟨","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","🟨"],
// ["🟨","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","🟨"],
// ["🟨","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","🟨"],
// ["  ","  ","🟨","🟨","  ","  ","  ","🟨","  ","  ","  ","🟨","🟨","  ","  "],
// ["  ","  ","  ","🟨","  ","  ","  ","🟨","  ","  ","  ","🟨","  ","  ","  "],
// ["  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  ","  "],
// ["  ","  ","  ","  ","🟨","🟨","🟨","  ","🟨","🟨","🟨","  ","  ","  ","  "]
// ]
// ;

// const grid = [
//   ["  ","🟨","  "],
//   ["  ","  ","🟨"],
//   ["🟨","🟨","🟨"]
// ];

const grid = [
  ["  ", "  ", "  ", "  ", "  "],
  ["  ", "  ", "🟨", "  ", "  "],
  ["  ", "  ", "🟨", "  ", "  "],
  ["  ", "  ", "🟨", "  ", "  "],
  ["  ","  ", "  ", "  ", "  "],
]

const offsets = [
  [-1, -1], [0, -1], [1, -1],
  [-1, 0],           [1, 0],
  [-1, 1],  [0, 1],  [1, 1],
];

const printScreen = (grid) => {
  console.clear();
  console.log(grid.map(row => row.join("")).join("\n"));
};

const countAliveNeighbors = (x, y, grid) => {
  let count = 0;

  for (const [dx, dy] of offsets) {
    const nx = x + dx;
    const ny = y + dy;

    if (
      nx >= 0 &&
      nx < grid[0].length &&
      ny >= 0 &&
      ny < grid.length &&
      grid[ny][nx] === "🟨"
    ) {
      count++;
    }
  }

  return count;
};

const nextGeneration = (grid) => {
  let changed = false;
  const next = grid.map(row => [...row]);

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const neighbors = countAliveNeighbors(x, y, grid);

      if (grid[y][x] === "🟨") {
        if (neighbors < 2 || neighbors > 3) {
          next[y][x] = "  ";
          changed = true;
        }
      } else {
        if (neighbors === 3) {
          next[y][x] = "🟨";
          changed = true;
        }
      }
    }
  }

  return { next, changed };
};

const startAnimation = (initialGrid, speed = 500) => {
  let grid = initialGrid;

  printScreen(grid);

  const intervalId = setInterval(() => {
    const { next, changed } = nextGeneration(grid);
    grid = next;

    printScreen(grid);

    if (!changed) {
      console.log("Simulation stabilized. Animation stopped.");
      clearInterval(intervalId);
    }
  }, speed);
};

startAnimation(grid, 400);