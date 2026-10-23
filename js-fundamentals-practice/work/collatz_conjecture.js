function isEven(x) {
  return x % 2 === 0;
}

function collatzConjecture(x) {
  const result = isEven(x) ? x / 2 : (3 * x) + 1;
  return result;
}

function collatzSequence(x) {
  let number = x;
  while (number !== 1) {
    console.log(number);
    number = collatzConjecture(number);
  }
  console.log(number);
}

collatzSequence(10);