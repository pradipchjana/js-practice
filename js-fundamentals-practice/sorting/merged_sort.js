let numberOfTimes = 0;

const mergeSort = array => {
  numberOfTimes++;
  const arraylength = array.length;
  if (arraylength === 1) {
    return array;
  }

  const mid = Math.floor(arraylength / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
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

function findNumberBetween(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower));
}

function randomElements(numberOfElements) {
  let elements = [];
  for (let index = 0; index < numberOfElements; index++) {
    elements.push(findNumberBetween(1, 100));
  }
  return elements;
}

function benchMark() {
  const elements = randomElements(1000);
  numberOfTimes = 0;
  const sortedData = mergeSort(elements);
  const numberOfElements = sortedData.length;
  console.log(`${numberOfElements} | ${numberOfTimes}`);
  console.log(sortedData);
  
}

benchMark();