const detectPieceAt = (position, square) => {
  const mask = 1n << BigInt(square);

  const pieces = position.sideToMove === "white"
    ? ["P", "N", "B", "R", "Q", "K"]
    : ["p", "n", "b", "r", "q", "k"];

  for (let p of pieces) {
    if (position.bitboards[p] & mask) return p;
  }

  return null;
};

const handleCapture = (position, move, p) => {
};

export const makeMove = (position, move) => {
  const { from, to, promotion, flag } = move;

  const newPos = position.clone();

  newPos.enPassant = null;

  const fromBB = 1n << BigInt(from);
  const toBB = 1n << BigInt(to);

  const piece = detectPieceAt(position, from);

  newPos.pieces[piece] &= ~fromBB;

  // Handle captures
  handleCapture(newPos, move, piece);

  // Handle promotion or normal placement
  placePiece(newPos, move, piece);

  // Handle special flags
  handleSpecial(newPos, move, piece);

  // Update clocks
  updateClocks(newPos, move, piece);

  newPos.turn = position.turn === "w" ? "b" : "w";

  // Recalculate aggregates
  newPos.reCalculateAggregates();

  return newPos;
};
