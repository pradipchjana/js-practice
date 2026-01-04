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

export const validRow = (grid,y) => {
  return hasDublicate(grid[y]);
}

export const validCol = (grid,x) => {
  const isPresent = Array.from({ length: grid.length }, () => 0);
  
  for (let y = 0; y < grid.length; y++) {
    if (grid[y][x] === 0) continue;
    isPresent[grid[y][x] - 1]++;
    if (isPresent[grid[y][x] - 1] > 1) {
      return false;
    }
  }
  
  return  true;
}

export const validBlock = (grid,x) => {
  const isPresent = Array.from({ length: grid.length }, () => 0);
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === 0) continue;
      isPresent[grid[y][x] - 1]++;
      if (isPresent[grid[y][x] - 1] > 1) {
        return false;
      }
    }
  }
  
  return  true;
}

