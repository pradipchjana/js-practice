function max(x,y) {
  return x > y ? x : y;
}

function min(x,y) {
  return x < y ? x : y;
}
/* function sumOfThree(x,y,z) {
  return x + y + z;
}
function secondGreatestUsingAddition(a,b,c) {
  return sumOfThree(a,b,c) - max(a,max(b,c)) - min(a,min(b,c));
} */

function secondGreatest(a,b,c) {
  return min(max(a,b),max(a,c));
}
//console.log(secondGreatest(2,4,3));
console.log(secondGreatestUsingAddition(2,4,3));
