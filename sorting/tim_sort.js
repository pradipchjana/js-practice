const RUN = 3;

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

const timSort = array => {
  const endIndex = array.length;
  for (let index = 0; index < array.length; index += RUN) {
    insertionSort(array, index, Math.min(index + RUN, endIndex));
  }

  for (let size = RUN; size < array.length; size = 2 * size) {
    
    
  }
  return array;
}

console.log(timSort([4,3,2,1,2,6]));
