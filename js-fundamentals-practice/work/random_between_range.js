function randomBetweenRange(start, end) {
  let randValue = Math.random() * end;
  if(randValue < start) randValue = start + randValue;
  return Math.floor(randValue);
}