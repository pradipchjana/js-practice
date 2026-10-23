let game = [
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

let LIMIT = 7;

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
    case 'a': return moveLeft(current);
    case 'd': return moveRight(current);
    case 'w': return moveUp(current);
    case 's': return moveDown(current);
    default:
      console.log("Invalid, you can only go your nearest, type again");
      play(current);
  }
}

function checkValidPath(move) {
  return route[move];
}

function play(current) {
  showField();
  const input = prompt("Enter Your move,(w/s/a/d)");
  const move = findMove(input, current);
  console.clear();
  if (move === -1) {
    console.log("Invalid Move, type again");
    play(current);
    return ;
  }

  if (move === 99) {
    console.log("You Win");
    game[move] = "✅";
    showField();
    return;
  }
  if (checkValidPath(move)) {
    console.log("Valid Move,Go ahead");
    game[move] = "✅";
    current = move;
    play(current);
    return;
  }
  LIMIT = LIMIT - 1;
  game[move] = '💥';
  showField();
  if (LIMIT <= 0) {
    console.clear();
    console.log("You Loose! Now, You have " + LIMIT + " changes");
    
    const resetField = game.fill("⬜️");
    resetField.shift();
    resetField.unshift("✅");
    game = resetField;
    play(0);
    return;
  }

  console.log("You don't have any changes");
  
  return;
}
function start() {
  console.log("You have 7 changes");
  
  console.log("W for up, S for down, A for left, D for right");
  play(0);
}
start();