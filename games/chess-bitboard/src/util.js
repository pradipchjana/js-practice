export const square = (rank, file) => BigInt(rank * 8 + file);

export const toAlgebraic = (sq) => {
  const s = Number(sq);
  const file = `abcdefgh`[s % 8];
  const rank = Math.floor(s / 8) + 1;
  return `${file}${rank}`;
}

export const bitScanForward = (bb) => {
  if (bb === 0n) return -1;
  let pos = 0;
  while ((bb & 1n) === 0n) {
    bb >>= 1n
    pos++;
  }
  return pos;
}

export const popLSB = (bb) =>{
  const lsb = bb & -bb;
  const square = Number(BigInt.asUintN(64, lsb).toString(2).length - 1);
  bb &= bb - 1n;
  return square;// i need to return bb also;
}

export const FILE_A = 0x01010101_01010101n;
export const FILE_H = 0x8080808_080808080n;

export const NOT_FILE_A = ~FILE_A;
export const NOT_FILE_H = ~FILE_H;

export const RANK_1 = 0x00000000_000000FFn;
export const RANK_2 = 0x00000000_0000FF00n;
export const RANK_4 = 0x00000000_FF000000n;
export const RANK_5 = 0x000000FF_00000000n;
export const RANK_7 = 0x00FF0000_00000000n;
export const RANK_8 = 0xFF000000_00000000n;