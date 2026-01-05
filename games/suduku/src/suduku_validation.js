const dbg = value => console.log(value) || value;

const input = [
  [1,2,3],
  [2,3,1],
  [3,1,2],
]

export const hasDublicate = (values) => {
  const seen = new Set();
  for (const value of values) {
    if (value === 0) continue;
    if (seen.has(value)) return false;
    seen.add(value);
  }
  return true;
}

export const validRow = (grid,row) => {
  return hasDublicate(grid[row]);
}

export const validCol = (grid,col) => {
  const column = grid.map(row => row[col]);
  return hasDublicate(column);
}

export const validBlock = (grid, col, row,blockSize) => {
  const startRow = Math.floor(row / blockSize) * blockSize;
  const startCol = Math.floor(col / blockSize) * blockSize;

  const blocks = [];

  for (let r = startRow; r < startRow+blockSize; r++) {
    for (let c = startCol; c < startCol+blockSize; c++) {
      blocks.push(grid[r][c]);
    }
    
  }
  return hasDublicate(blocks);
}

