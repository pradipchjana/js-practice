const dbg = (value) => console.log(value) || value;

const grid = [
  [1, 0, 3, 4],
  [2, 3, 1, 0],
  [0, 0, 2, 0],
  [0, 1, 4, 3],
];

export const hasDublicate = (values) => {
  const withoutZero = values.filter((v) => v !== 0);
  const uniqueElements = new Set(withoutZero);

  return uniqueElements.size !== withoutZero.length;
  // const seen = new Set();
  // for (const value of values) {
  //   if (value === 0) continue;
  //   if (seen.has(value)) return false;
  //   seen.add(value);
  // }
  // return true;
};

export const validRow = (grid, row) => hasDublicate(grid[row]);

export const validCol = (grid, col) => {
  const column = grid.map((row) => row[col]);
  return hasDublicate(column);
};

// 3*3
// 0,0 0,1 0,2 1,0 1,1 1,2

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
  validBlock(grid, col, row, blockSize);

const isValidRow = (grid, rowId, blockSize) => {
  const row = grid[rowId];
  return row.every((_, colId) => isValid(grid, rowId, colId, blockSize));
};

export const validGrid = (grid, blockSize) => {
  return grid.every((_, rowId) => isValidRow(grid, rowId, blockSize));
};

console.log(validGrid(grid, 2));
