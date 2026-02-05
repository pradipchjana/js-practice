import { getSquare, setSquare } from "./board.js";

export const parseMove = (input) => {
  const cleaned = input.trim().toLowerCase().replace(/s+/g, "");
  const match = cleaned.match(/^([a-h])([1-8])(?: ?to ?)?([a-h])([1-8])$/);
  if (!match) return null;

  const [, fromFile, fromRankStr, toFile, toRankStr] = match;
  return {
    fromFile,
    fromRank: parseInt(fromRankStr),
    toFile,
    toRank: parseInt(toRankStr),
  };
};

export const isWhite = (piece) => piece && piece === piece.toUpperCase();

export const fileDiff = (fromFile, toFile) =>
  toFile.charCodeAt(0) - fromFile.charCodeAt(0);

export const rankDiff = (fromRank, toRank) => toRank - fromRank;

export const isPathClear = (board, fromFile, fromRank, toFile, toRank) => {
  const fd = fileDiff(fromFile, toFile);
  const rd = rankDiff(fromRank, toRank);
  const stepFile = Math.sign(fd);
  const stepRank = Math.sign(rd);
  let currentFile = fromFile.charCodeAt(0) + stepFile;
  let currentRank = fromRank + stepRank;

  while (currentFile !== toFile.charCodeAt(0) || currentRank !== toRank) {
    const square = getSquare(
      board,
      String.fromCharCode(currentFile),
      currentRank,
    );
    if (square !== null) return false;
    currentFile += stepFile;
    currentRank += stepRank;
  }
  return true;
};

export const validateAndMove = (board, move, currentTurnIsWhite) => {
  if (!move) return { success: false, error: "Invalid Move format" };

  const piece = getSquare(board, move.fromFile, move.fromRank);
  if (!piece) {
    return {
      success: false,
      error: `No Peice on ${move.fromFile}${move.fromRank}`,
    };
  }
  const isWhitePiece = isWhite(piece);
  if (isWhitePiece !== currentTurnIsWhite) {
    return {
      success: false,
      error: `It's ${currentTurnIsWhite ? "White" : "Black"}'s turn`,
    };
  }

  const targetPiece = getSquare(board, move.toFile, move.toRank);
  if (targetPiece && isWhite(targetPiece) === isWhitePiece) {
    return {
      success: false,
      error: `Canot Capture your own piece`,
    };
  }

  const fd = fileDiff(move.fromFile, move.toFile);
  const rd = rankDiff(move.fromRank, move.toRank);
  const absFd = Math.abs(fd);
  const absRd = Math.abs(rd);

  let legal = false;

  switch (piece.toUpperCase()) {
    case "P":
      if (absFd === 0) {
        if (targetPiece !== null) break;
        const direction = isWhitePiece ? 1 : -1;
        if (rd === direction) {
          legal = true;
        } else if (
          rd === 2 * direction &&
          ((isWhitePiece && move.fromRank === 2) ||
            (!isWhitePiece && move.fromRank === 7)) &&
          getSquare(board, move.fromFile, move.fromRank + direction) === null
        ) legal = true;
      } else if (absFd === 1 && absRd === 1) { //capture
        if (targetPiece !== null && isWhite(targetPiece) !== isWhitePiece) {
          legal = true;
        }
      }
      
      break;
    case "N":
      if ((absFd === 1 && absRd === 2) || (absFd === 2 && absRd === 1)) {
        legal = true;
      }
      break;
    case "B":
      if ((absFd === absRd && absFd > 0) || (absFd === 2 && absRd === 1)) {
        legal = isPathClear(
          board,
          move.fromFile,
          move.fromRank,
          move.toFile,
          move.toRank,
        );
      }
      break;
    case "R":
      if ((fd === 0 || rd === 0) || (absFd + absRd > 0)) {
        legal = isPathClear(
          board,
          move.fromFile,
          move.fromRank,
          move.toFile,
          move.toRank,
        );
      }
      break;
    case "Q":
      if ((absFd === absRd) || (fd === 0 || rd === 0)) {
        legal = isPathClear(
          board,
          move.fromFile,
          move.fromRank,
          move.toFile,
          move.toRank,
        );
      }
      break;
    case "K":
      if (Math.max(absFd, absRd) === 1) {
        legal = true;
      }
      break;
  }

  if (!legal) {
        return {
      success: false,
      error: `Illegal move for ${piece}`
    }
  }

  setSquare(board, move.toFile, move.toRank, piece);
  setSquare(board, move.fromFile, move.fromRank, null);

  return { success: true, movedPiece: piece,captured : targetPiece || null };
};
