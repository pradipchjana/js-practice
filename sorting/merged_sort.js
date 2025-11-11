const mergeSort = array => {
  const arraylength = array.length;
  if (arraylength === 1) {
    return array;
  }

  const mid = Math.floor(arraylength / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return [left, right];
}

console.log(mergeSort([1,2,3,4,5]));
