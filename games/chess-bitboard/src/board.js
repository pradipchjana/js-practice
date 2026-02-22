import { bishopAttacks, KNIGHT_ATTACKS, queenAttacks, rookAttacks } from "./attack.js";
import { Position } from "./positions.js";
import {
  bitScanForward,
  NOT_FILE_A,
  NOT_FILE_H,
  popLSB,
  RANK_1,
  RANK_2,
  RANK_7,
  RANK_8,
} from "./util.js";

export class Board {
  constructor() {
    this.state = new Position();
  }

  print() {
    this.state.print();
  }

  generatePawnMoves = () => {
    const moves = [];
    const white = this.state.turn === "w";
    const pawns = white ? this.state.pieces.P : this.state.pieces.p;
    const enemyPieces = white ? this.state.blackPieces : this.state.whitePieces;
    const occupied = this.state.occupied;
    const push = white ? 8n : -8n;
    const startRank = white ? RANK_2 : RANK_7;
    const promotionRank = white ? RANK_8 : RANK_1;

    const shift = (bb, amount) =>
      amount > 0n ? (bb << amount) : (bb >> (-amount));

    const single = shift(pawns, push) & ~occupied;
    let temp = single;

    while (temp !== 0n) {
      const toSq = bitScanForward(temp);
      const fromSq = toSq - Number(push);
      const isPromotion = (1n << BigInt(toSq)) & promotionRank;
      moves.push({
        from: fromSq,
        to: toSq,
        promotion: isPromotion ? "Q" : null,
        isCapture: false,
      });
      temp &= temp - 1n;
    }

    const twoStep = shift(single & startRank, push) & ~occupied;

    temp = twoStep;
    while (temp !== 0n) {
      const toSq = bitScanForward(temp);
      const fromSq = toSq - Number(push * 2n);
      moves.push({ from: fromSq, to: toSq, promotion: null, isCapture: false });
      temp &= temp - 1n;
    }

    const leftMask = white ? NOT_FILE_A : NOT_FILE_H;
    const rightMask = white ? NOT_FILE_H : NOT_FILE_A;

    const leftShift = white ? 7n : -9n;
    const rightShift = white ? 9n : -7n;

    const leftCaptures = shift(pawns & leftMask, leftShift) & enemyPieces;

    temp = leftCaptures;
    while (temp !== 0n) {
      const toSq = bitScanForward(temp);
      const fromSq = toSq - Number(leftShift);
      moves.push({ from: fromSq, to: toSq, promotion: null, isCapture: true });
      temp &= temp - 1n;
    }

    const rightCaptures = shift(pawns & rightMask, rightShift) & enemyPieces;

    temp = rightCaptures;
    while (temp !== 0n) {
      const toSq = bitScanForward(temp);
      const fromSq = toSq - Number(rightShift);
      moves.push({ from: fromSq, to: toSq, promotion: null, isCapture: true });
      temp &= temp - 1n;
    }
    return moves;
  }

  generateKnightMoves() {
    const moves = [];
    const white = this.state.turn === 'w';
    const knights = white ? this.state.pieces.N : this.state.pieces.n;
    const ownPieces = white ? this.state.whitePieces : this.state.blackPieces;

    let temp = knights;

    while (temp !== 0n) {
      const from = bitScanForward(temp);

      const attacks = KNIGHT_ATTACKS[from] & ~ownPieces;
      
      let attackTemp = attacks;

      while (attackTemp !== 0n) {
        const to = bitScanForward(attackTemp);
        moves.push({ from, to });
        attackTemp &= attackTemp - 1n;
      }

      temp &= temp - 1n;
    }
    return moves;
  }

  generateRookMoves() {
    const moves = [];
    const white = this.state.turn === 'w';
    const rooks = white ? this.state.pieces.R : this.state.pieces.r;

    const occupancy = this.occupied;

    const temp = rooks;
    while (temp !== 0n) {
      const from = popLSB(temp);
      const attacks = rookAttacks(from, occupancy) & ~occupancy;

      const attackTemp = attacks;
      while (attackTemp !== 0) {
        const to = popLSB(attackObj);

        moves.push({
          from, to, piece: 'rook'
        });
      }
    }
  }

  generateBishopMoves() {
    const moves = [];
    const white = this.state.turn === 'w';
    const bishops = white ? this.state.pieces.B : this.state.pieces.b;
    const ownPieces = white ? this.whitePieces : this.blackPieces;

    const occupancy = this.occupied;

    const temp = bishops;
    while (temp !== 0n) {
      const from = popLSB(temp);
      const attacks = bishopAttacks(from, occupancy) & ~ownPieces;

      const attackTemp = attacks;
      while (attackTemp !== 0) {
        const to = popLSB(attackObj);

        moves.push({
          from, to, piece: 'bishop'
        });
      }
    }
  }


  generateQueenMoves() {
    const moves = [];
    const white = this.state.turn === 'w';
    const queens = white ? this.state.pieces.R : this.state.pieces.r;
    const ownPieces = white ? this.whitePieces : this.blackPieces;

    const occupancy = this.occupied;

    const temp = queens;
    while (temp !== 0n) {
      const from = popLSB(temp);
      const attacks = queenAttacks(from, occupancy) & ~ownPieces;

      const attackTemp = attacks;
      while (attackTemp !== 0) {
        const to = popLSB(attackObj);

        moves.push({
          from, to, piece: 'queen'
        });
      }
    }
  }
}
