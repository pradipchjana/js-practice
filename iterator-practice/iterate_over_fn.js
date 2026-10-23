const addTwo = (number) => number + 2;

function* iterateOverFn(callBackFn, value) {
  let currentValue = callBackFn(value);
  while (true) {
    yield currentValue;
    currentValue = callBackFn(currentValue);
  }
}
