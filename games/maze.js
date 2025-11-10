function fillWithCharecter(side) {
  let squareSide = [];
  for (let index = 0; index < side; index++) {
    for (let innerIndex = 0; innerIndex < side; innerIndex++) {
      squareSide.push("❤️");
    }
  }
  return squareSide;
}

const game = fillWithCharecter(10);

function showField(side) {
  let result = [];
  for (let index = 0; index < side; index++) {
    result.push(game.slice(index * side, (index + 1) * side).join(""));
  }
  console.log(result.join('\n'));
}

showField(10);