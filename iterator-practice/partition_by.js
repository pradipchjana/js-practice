function* partitionBy(array, criteria) {
  let currentPartition = [array[0]];
  let priorElement = array[0];
  for (const element of array.slice(1)) {
    if (criteria(element) === criteria(priorElement)) {
      currentPartition.push(element);
    } else {
      yield currentPartition;
      currentPartition = [element];
    }
    priorElement = element;
  }
  yield currentPartition;
}

const isEven = (element) => element % 2 === 0;
const identity = (element) => element;