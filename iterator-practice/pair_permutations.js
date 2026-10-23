function* pairPermutations(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      yield [array[i], array[j]];
    }
  }
}