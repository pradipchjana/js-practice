function isEven(x){
  return x % 2 === 0;
}

function checkEven(x,y) {
  for (let term = x; term <= y; term++) {
    if (isEven(term)) {
      console.log(term);
    }
    
  }
}

checkEven(1,20)