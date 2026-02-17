import { square } from "./util.js";

export class Position {
  constructor() {
    this.resetToInitial();
  }

  resetToInitial() {
    this.pieces = {
      P: 0x00000000_0000FF00n,
      N: (1n << 1n) | (1n << 6n),
      B: (1n << 2n) | (1n << 5n),
      R: (1n << 0n) | (1n << 7n),
      Q: 1n << 3n,
      K: 1n << 4n,

      p: 0x00FF0000_00000000n,
      n: (1n << 57n) | (1n << 62n),
      b: (1n << 58n) | (1n << 61n),
      r: (1n << 56n) | (1n << 63n),
      q: 1n << 59n,
      k: 1n << 60n,
    }

    this.turn = 'w';
    this.castling = '';
    this.enPassant = null;
    this.halfMoveClock = 0;
    this.fullMoveNumber = 1;
    this.#reCalculateAggregates();
  }

  #reCalculateAggregates() {
    this.occupied = 0n;
    this.whitePieces = 0n;
    this.blackPieces = 0n;

    for (const [symbol,bb] of Object.entries(this.pieces)) {
      this.occupied |= bb;
      if (symbol === symbol.toUpperCase()) {
        this.whitePieces |= bb;
      } else {
        this.blackPieces |= bb;
      }
    }
  }

  updateAggregatesAfterMove() {
    this.#reCalculateAggregates();
  }

    print() {
    let str = "";
    for (let rank = 7; rank >= 0; rank--) {
      str += (rank + 1) + " ";
      for (let file = 0; file < 8; file++) {
        const sq = square(rank, file);
        const mask = 1n << sq;
        let piece = ".";

        for (const [p, bb] of Object.entries(this.pieces)) {
          if ((bb & mask) !== 0n) {
            piece = p;
            break;
          }
        }
        str += piece + "";
      }
      str += "\n";
    }
    str += "  abcdefgh\n\n";
    console.log(str);
  }
}