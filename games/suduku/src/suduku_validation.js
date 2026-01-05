const dbg = (value) => console.log(value) || value;

const grid = [
        [1, 0, 3, 4],
        [2, 3, 1, 0],
        [0, 0, 2, 0],
        [0, 1, 4, 3],
      ]

export const hasDublicate = (values) => {
  const seen = new Set();
  for (const value of values) {
    if (value === 0) continue;
    if (seen.has(value)) return false;
    seen.add(value);
  }
  return true;
};

export const validRow = (grid, row) => {
  return hasDublicate(grid[row]);
};

export const validCol = (grid, col) => {
  const column = grid.map((row) => row[col]);
  return hasDublicate(column);
};

export const validBlock = (grid, col, row, blockSize) => {
  const startRow = Math.floor(row / blockSize) * blockSize;
  const startCol = Math.floor(col / blockSize) * blockSize;

  const blocks = [];

  for (let r = startRow; r < startRow + blockSize; r++) {
    for (let c = startCol; c < startCol + blockSize; c++) {
      blocks.push(grid[r][c]);
    }
  }
  return hasDublicate(blocks);
};

const isValid = (grid, row, col, blockSize) =>
  validRow(grid, row) && validCol(grid, col) &&
  validBlock(grid,col,row, blockSize);

const validGrib = (grid,blockSize) => {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (!isValid(grid, row, col, blockSize)) {
        return false;
      }
    }
  }
  return true;
};

console.log(validGrib(grid, 2));
