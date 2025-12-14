const isEven = (number) => number % 2 === 0;

function* flipedConsequetive(array) {
  for (let index = 0; index < array.length; index++) {
    const element = isEven(index) ? array[index + 1] : array[index - 1];
    yield element;
  }
} 