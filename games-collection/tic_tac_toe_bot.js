const game = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
const mark = [true, true, true, true, true, true, true, true, true];

function checkRow(char) {
  const firstRow = game[0] === char && game[1] === char && game[2] === char;
  const secondRow = game[3] === char && game[4] === char && game[5] === char;
  const thirdRow = game[6] === char && game[7] === char && game[8] === char;
  return firstRow || secondRow || thirdRow;
}

function checkColumn(char) {
  const firstColumn = game[0] === char && game[3] === char && game[6] === char;
  const secondColumn = game[1] === char && game[4] === char && game[7] === char;
  const thirdColum = game[2] === char && game[6] === char && game[8] === char;
  return firstColumn || secondColumn || thirdColum;
}

function checkDiagonal(char) {
  const mainDiagonal = game[0] === char && game[4] === char && game[8] === char;
  const reverseDiagonal = game[2] === char && game[4] === char && game[6] === char;
  return mainDiagonal || reverseDiagonal;
}

function checkWin(char) {
  return checkRow(char) || checkColumn(char) || checkDiagonal(char);
}

function showTable() {
  let print = "";
  for (let index = 0; index < game.length; index++) {
    if (index % 3 === 0 && index != 0) {
      print += "\n";
    }
    print += "|" + game[index] + "|";
  }
  console.log(print);
}

function player() {
  console.log("\nX player turn");
  const input = parseInt(prompt("Enter position that you want to play:"));
  const move = input - 1;
  if (move < 0 || move > 8) {
    console.log("Invalid Move");
    player();
  }

  if (mark[move]) {
    mark[move] = false;
    game[move] = 'x';
  } else {
    console.log("this place already taken, chosse valid");
    player();
  }

  if (isAllTRaverse(mark)) {
    console.log("Match Draw");
    return;
  }
  showTable();
  if (checkWin("x")) {
    console.log("X player win!")
    return;
  }
  bot();
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function isAllTRaverse() {
  for (let index = 0; index < mark.length; index++) {
    if (mark[index]) {
      return false;
    }
  }
  return true;
}

function bot() {
  const botMove = generateRandomNumber();

  if (mark[botMove]) {
    mark[botMove] = false;
    game[botMove] = 'o';
  } else {
    return bot();
  }

  console.log("BOT did his move");

  showTable();
  if (isAllTRaverse(mark)) {
    console.log("Match Draw");
    return;
  }
  if (checkWin("o")) {
    console.log("O player win!")
    return;
  }
  player();
}



function play() {
  console.log("It is a two player game, You need one partner");
  console.log("You Need to give your position like that");
  const table = `
---------
|1||2||3|
|4||5||6|
|7||8||9|
---------`
  console.log(table);

  showTable();
  player();
}

play();

