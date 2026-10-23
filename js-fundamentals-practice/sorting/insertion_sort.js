let numberOfTimes = 0;

const insertionSort = array => {
  for (let index = 1; index < array.length; index++) {
    const key = array[index];
    let j = index - 1;

    while (j >= 0 && array[j] > key) {
      numberOfTimes++;
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
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
  const sortedData = insertionSort(elements);
  const numberOfElements = sortedData.length;
  console.log(`${numberOfElements} | ${numberOfTimes}`);
  console.log(sortedData);
  
}

benchMark();