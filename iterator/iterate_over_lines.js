function* iterateOverLinesOfText(string) {
  let index = 0;
  while (true) {
    const nextIndex = string.indexOf("\n", index);
    const line = string.slice(index, nextIndex);
    yield line;
    index = nextIndex + 1;
  }

}