import { square } from "./util.js";

export class Board {
  constructor() {
    this.site = this.initialPosition();
  }

  initialPosition() {
    const whitePawns = 0x00000000_0000FF00n;
    const blackPawns = 0x00FF0000_00000000n;

    const whiteRooks = 0x00000000_00000081n; // (1n << 0n) || (1n << 7n)
    const blackRooks = 0x81000000_00000000n;

    const whiteKnights = 0x00000000_00000042n;
    const blackKnights = 0x42000000_00000000n;

    const whiteBishops = 0x00000000_00000024n;
    const blackBishops = 0x24000000_00000000n;

    const whiteQueen = 0x00000000_00000010n;
    const blackQueen = 0x100000000_0000000n;

    const whiteKing = 0x00000000_00000008n;
    const blackKing = 0x08000000_00000000n;

    const white = whitePawns | whiteRooks | whiteKnights | whiteBishops |
      whiteKing | whiteQueen;
    const black = blackPawns | blackRooks | blackKnights | blackBishops |
      blackKing | blackQueen;

    return {
      pieces: {
        P: whitePawns,
        R: whiteRooks,
        N: whiteKnights,
        B: whiteBishops,
        Q: whiteQueen,
        K: whiteKing,
        p: blackPawns,
        r: blackRooks,
        n: blackKnights,
        b: blackBishops,
        q: blackQueen,
        k: blackKing,
      },
      occupied: white | black,
      whitePieces: white,
      blackPieces: black,
      move: "w",
      castling: "KQkq",
      enPassant: null,
      halfMoveClock: 0,
      fullMove: 1,
    };
  }

  print() {
    let str = "";
    for (let rank = 7; rank >= 0; rank--) {
      str += (rank + 1) + " ";
      for (let file = 0; file < 8; file++) {
        const sq = square(rank, file);
        const mask = 1n << sq;
        let piece = ".";
        
        for (const [p,bb] of Object.entries(this.site.pieces)) {
          if ((bb & mask) !== 0n) {
            piece = p;
            break;
          }
        }
        str += piece + "";
      } 
      str += "\n";
    }
    str += "  abcdefgh\n\n"
    console.log(str);
  }
  
}
