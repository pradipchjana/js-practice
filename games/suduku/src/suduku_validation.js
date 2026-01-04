const dbg = value => console.log(value) || value;
export const validRow = (input) => {
  const isPresent = Array.from({length: input.length },()=> 0)
  for (let x = 0; x < input.length; x++) {
    if (input[x] === 0) continue;
    isPresent[input[x]]++;
  }
  dbg(isPresent);
  return isPresent.every((key) => key < 2);
}