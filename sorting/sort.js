let numberOfTimes = 0;

function sort(data) {
  let sortedData = data.slice();
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      numberOfTimes++;
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }
  return sortedData;
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
  const sortedData = sort(elements);
  const numberOfElements = sortedData.length;
  console.log(`${numberOfElements} | ${numberOfTimes}`);
}

benchMark();
