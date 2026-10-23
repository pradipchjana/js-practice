function* chunk(array, chunkSize, overlaps = 0) {
  let index = 0;
  while ((index + overlaps) < (array.length)) {
    const currentChunk = [];
    for (let pointer = 0; pointer < chunkSize; pointer++) {
      currentChunk.push(array[index + pointer]);
    }
    yield currentChunk;
    index += chunkSize - overlaps;
  }
}
