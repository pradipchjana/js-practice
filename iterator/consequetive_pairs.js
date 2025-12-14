function* consequetivePairs(array) {
  let index = 0;
  while (index < array.length - 1) {
    yield [array[index], array[index + 1]];
    index++;
  }
}