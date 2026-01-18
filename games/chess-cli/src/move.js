import { getSquare, setSquare } from "./board.js";

export const parseMove = (input) => {
  const cleaned = input.trim().toLowerCase().replace(/s+/g, '');
  const match = cleaned.match(/^([a-h])([1-8])(?: ?to ?)?([a-h])([1-8])$/);
  if (!match) return null;

  const [, fromFile, fromRankStr, toFile, toRankStr] = match;
  return {
    fromFile,
    fromRank: parseInt(fromRankStr),
    toFile,
    toRank: parseInt(toRankStr)
  };
}

export const trySimpleMove = (board, move) => {
  if (!move) return { success: false, error: "Invalid Move format" };

  const piece = getSquare(board, move.fromFile, move.fromRank);
  if (!piece)
    return { success: false, error: `No Peice on ${move.fromFile}${move.fromRank}` };

  const target = getSquare(board, move.toFile, move.toRank);
  if (target !== null)
    return { success: false, error: `Target ${move.toFile}${move.toRank} is not empty` };

  setSquare(board, move.toFile, move.toRank, piece);
  setSquare(board, move.fromFile, move.fromRank, null);

  return { success: true, movedPiece: piece };
}