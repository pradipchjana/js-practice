const dbg = value => console.log(value) || value;

const input = [
  [1,2,3],
  [2,3,1],
  [3,1,2],
]

export const validRow = (grid,y) => {
  const isPresent = Array.from({ length: grid[0].length }, () => 0);
  
  for (let x = 0; x < grid.length; x++) {
    if (grid[y][x] === 0) continue;
    isPresent[grid[y][x] - 1]++;
    if (isPresent[grid[y][x] - 1] > 1) {
      return false;
    }
  }
  
  return  true;
}

