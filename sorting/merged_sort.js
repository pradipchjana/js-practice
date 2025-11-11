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

const merge = (left, right) => {
  let sorted = [];
  let i = 0;
  let j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  return sorted.concat(left.slice(i)).concat(right.slice(j));
}


console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(merge([3, 5, 7], [4, 6, 8]));
