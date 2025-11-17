const makeCounter = x => () => x++;
const makeAdder = x => y => x + y;
const something = (f, x) => f(x);

const count = makeCounter(2);
const addTwo = makeAdder(2);