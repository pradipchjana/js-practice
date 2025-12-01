const drawDirection = {
  horizontal: { stepX: 0, stepY: 1 },
  vertical:   { stepX: 1, stepY: 0 }
};

const drawModeByDir = {
  right: "horizontal",
  left:  "horizontal",
  down:  "vertical",
  up:    "vertical"
};

const textOrder = {
  right: +1,
  down:  +1,
  left:  -1,
  up:    -1
};

const movers = [];

const drawText = (screen, x, y, text, direction) => {
  const mode = drawModeByDir[direction];
  const { stepX, stepY } = drawDirection[mode];
  const order = textOrder[direction];

  for (let i = 0; i < text.length; i++) {
    const idx = order === 1 ? i : (text.length - 1 - i);
    const row = x + stepX * i;
    const col = y + stepY * i;

    if (screen[row] && screen[row][col] !== undefined) {
      screen[row][col] = text[idx];
    }
  }
};

const createScreen = (size) =>
  Array.from({ length: size }, () =>
    Array.from({ length: size }, () => " ")
  );

const clearScreen = (screen) => {
  for (let i = 0; i < screen.length; i++) {
    for (let j = 0; j < screen[i].length; j++) {
      screen[i][j] = " ";
    }
  }
};

const showScreen = (screen) =>
  screen.map(row => row.join("")).join("\n");

const motion = {
  up:    { dx: -1, dy:  0 },
  down:  { dx:  1, dy:  0 },
  left:  { dx:  0, dy: -1 },
  right: { dx:  0, dy:  1 }
};

const addMover = (text, x, y, direction, speed) => {
  const { dx, dy } = motion[direction];

  const mover = {
    text,
    x,
    y,
    dx,
    dy,
    direction
  };

  movers.push(mover);

  setInterval(() => {
    mover.x += mover.dx;
    mover.y += mover.dy;

    if (mover.x < - text.length || mover.x >= SIZE) mover.dx *= -1, mover.x += mover.dx;
    if (mover.y < - text.length || mover.y >= SIZE) mover.dy *= -1, mover.y += mover.dy;

  }, speed);
};

const SIZE = 20;
const screen = createScreen(SIZE);

setInterval(() => {
  console.clear();
  clearScreen(screen);

  for (const m of movers) {
    drawText(screen, m.x, m.y, m.text, m.direction);
  }

  console.log(showScreen(screen));

}, 50);

addMover("hello",    0, 0,  "down", 150);
addMover("pradip",   3, 10, "right", 120);
addMover("woh",      5, 20, "left", 200);
addMover("sagnik",   10, 5, "up", 180);
addMover("rockstar", 15, 15, "down", 100);