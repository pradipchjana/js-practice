const insertionSort = (array, start, end) => {
  for (let index = start + 1; index < end; index++) {
    const key = array[index];
    let j = index - 1;

    while (j >= start && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

console.log(insertionSort([4,3,2,1,2],0,3));
