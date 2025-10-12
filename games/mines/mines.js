const game = [
  '✅', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',
  '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',
  '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',
  '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',
  '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',
  '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',
  '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',
  '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',
  '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️',
  '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️'
]

const route = [
  true, false, false, false, false, false, false, false, false, false,
  true, true, false, false, false, false, false, false, false, false,
  false, true, false, false, false, false, false, false, false, false,
  false, true, true, true, true, true, false, false, false, false,
  false, false, false, false, false, true, false, false, false, false,
  false, false, false, false, false, true, false, false, false, false,
  false, false, false, false, false, true, false, false, false, false,
  false, false, false, false, false, true, true, false, false, false,
  false, false, false, false, false, false, true, true, true, false,
  false, false, false, false, false, false, false, false, true, true
]

function showField() {
  let result = [];
  for (let index = 0; index < 10; index++) {
    result.push(game.slice(index * 10, (index + 1) * 10).join(" "));
  }
  console.log(result.join('\n'));

}

function moveLeft(current) {
  if (current % 10 === 0) {
    return -1;
  }
  return current - 1;
}

function moveRight(current) {
  if (current % 10 === 9) {
    return -1;
  }
  return current + 1;
}

function moveUp(current) {
  if (current >= 0 && current < 10) {
    return -1;
  }
  return current - 10;
}

function moveDown(current) {
  if (current >= 90 && current < 100) {
    return -1;
  }
  return current + 10;
}

function findMove(input, current) {
  switch (input) {
    case 'l': return moveLeft(current);
    case 'r': return moveRight(current);
    case 'u': return moveUp(current);
    case 'd': return moveDown(current);
    default:
      console.log("Invalid, you can only go your nearest, type again");
      return play(current);
  }
}

function checkValidPath(move) {
  return route[move];
}

function play(current) {
  showField();
  console.log("You are in " + current + "position");
  const input = prompt("Enter Your move,(l/r/u/d)");
  const move = findMove(input, current);
  if (move === -1) {
    console.log("Invalid Move, type again");
    return play(current);
  }
  if (move === 99) {
    console.log("You Win");
    return;
  }
  if (checkValidPath(move)) {
    console.log("Valid Move,Go ahead");
    game[move] = "✅"
    current = move;
    return play(current);
  }
  console.log("You stepped on mine, You loose the game");
  game[move] = '💣';
  showField();
  return;
}
play(0);
