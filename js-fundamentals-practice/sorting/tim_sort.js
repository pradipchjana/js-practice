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

const merge = (array, left, mid, right) => {
  const leftArray = array.slice(left, mid);
  const rightArray = array.slice(mid, right + 1);
  let sorted = [];
  let i = 0;
  let j = 0;
  numberOfTimes++;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  return sorted.concat(left.slice(i)).concat(right.slice(j));
}

const timSort = array => {
  const endIndex = array.length;
  for (let index = 0; index < array.length; index += RUN) {
    insertionSort(array, index, Math.min(index + RUN, endIndex));
  }

  for (let size = RUN; size < array.length; size = 2 * size) {
    for (let left = 0; index < array.length; left = 2 * size - 1) {
      
    }
  }
  return array;
}

console.log(timSort([4,3,2,1,2,6]));
