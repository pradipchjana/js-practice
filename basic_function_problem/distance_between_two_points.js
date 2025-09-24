function substraction(x,y){
  return x - y;
}

function square(x) {
  return x ** 2;
}

function squareRoot(x) {
  return x ** 0.5;
}

function addition(x,y) {
  return x + y;
}

function distanceBetweenTwoPoints(a,b,x,y) {
  return squareRoot(addition(square(substraction(a,b)),square(substraction(x,y))));
}

console.log(distanceBetweenTwoPoints(4,0,0,3));
