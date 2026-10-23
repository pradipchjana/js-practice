function* generateCycleOfElements(array) {
  let index = 0;
  let length = array.length;
  while (true) {
    yield array[index];
    index = (index + 1) % length;
  }
}