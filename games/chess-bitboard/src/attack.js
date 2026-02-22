import { square } from "./util.js";

const onBoard = (file, rank) => file >= 0 && file < 8 && rank >= 0 && rank < 8;

const knightOffsets = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, 2],
  [-2, -1],
  [-1, -2],
  [-2, 1],
];

export const getKnightAttacks = () => {
  const knightAttacks = new Array(64).fill(0n);
  for (let sq = 0; sq < 64; sq++) {
    let attacks = 0n;

    const file = sq % 8;
    const rank = Math.floor(sq / 8);

    for (const [df, dr] of knightOffsets) {
      const newFile = file + df;
      const newRank = rank + dr;

      if (onBoard(newFile, newRank)) {
        const targetSq = square(newRank, newFile);
        attacks |= 1n << targetSq;
      }
    }
    knightAttacks[sq] = attacks;
  }
  return knightAttacks;
};

const kingOffsets = [
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
];

const getKingAttacks = () => {
  const kingAttacks = new Array(64).fill(0n);
  for (let sq = 0; sq < 64; sq++) {
    let attacks = 0n;

    const file = sq % 8;
    const rank = Math.floor(sq / 8);

    for (const [df, dr] of kingOffsets) {
      const newFile = file + df;
      const newRank = rank + dr;

      if (onBoard(newFile, newRank)) {
        const targetSq = square(newRank, newFile);
        attacks |= 1n << targetSq;
      }
    }
    kingAttacks[sq] = attacks;
  }
  return kingAttacks;
};

const getPawnAttacks = () => {
  const pawnAttacks = {
    w: new Array(64).fill(0n),
    b: new Array(64).fill(0n),
  };
  for (let sq = 0; sq < 64; sq++) {
    const file = sq % 8;
    const rank = Math.floor(sq / 8);

    let whiteAttacks = 0n;
    if (onBoard(file - 1, rank + 1)) {
      whiteAttacks |= 1n << square(file - 1, rank + 1);
    }
    if (onBoard(file + 1, rank + 1)) {
      whiteAttacks |= 1n << square(file + 1, rank + 1);
    }
    pawnAttacks.w[sq] = whiteAttacks;

    let blackAttacks = 0n;
    if (onBoard(file - 1, rank - 1)) {
      blackAttacks |= 1n << square(file - 1, rank - 1);
    }
    if (onBoard(file + 1, rank - 1)) {
      blackAttacks |= 1n << square(file + 1, rank - 1);
    }
    pawnAttacks.b[sq] = blackAttacks;
  }
  return pawnAttacks;
};

export const KNIGHT_ATTACKS = getKnightAttacks();
export const KING_ATTACKS = getKingAttacks();
export const PAWN_ATTACKS = getPawnAttacks();

export const rookAttacks = (square, occupancy) => {
  let attacks = 0n;

  //north
  for (let s = square + 8; s < 64; s += 8) {
    const bb = 1n << BigInt(s);
    attacks |= bb;
    if (bb & occupancy) break;
  }

  //south
  for (let s = square - 8; s >= 0; s -= 8) {
    const bb = 1n << BigInt(s);
    attacks |= bb;
    if (bb & occupancy) break;
  }

  //east
  for (let s = square + 1; s % 8 !== 0; s++) {
    const bb = 1n << BigInt(s);
    attacks |= bb;
    if (bb & occupancy) break;
  }

  //west
  for (let s = square - 1; s % 8 !== 7 && s >= 0; s--) {
    const bb = 1n << BigInt(s);
    attacks |= bb;
    if (bb & occupancy) break;
  }
  return attacks;
};

export const bishopAttacks = (square, occupancy) => {
  let attacks = 0n;

  for (let s = square + 9; s < 64 && s % 8 !== 0; s += 9) {
    const bb = 1n << BigInt(s);
    attacks |= bb;
    if (bb & occupancy) break;
  }

  for (let s = square + 7; s < 64 && s % 8 !== 7; s += 7) {
    const bb = 1n << BigInt(s);
    attacks |= bb;
    if (bb & occupancy) break;
  }

  for (let s = square - 7; s >=0 && s % 8 !== 0; s -= 9) {
    const bb = 1n << BigInt(s);
    attacks |= bb;
    if (bb & occupancy) break;
  }

  return attacks;
};

export const queenAttacks = (square, occupancy) => {
  return rookAttacks(square, occupancy) | bishopAttacks(square,occupancy);
}
