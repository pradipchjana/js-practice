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