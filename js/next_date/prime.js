  let isPrime = true;
  let term = 2;
  let prime = [];
  for (let index = 0; index < 100_00_000; index++) {
    isPrime = true;
    term = 2
    while (term < index && isPrime) {
      if(term % index === 0){
        isPrime = false;
      }
      term++;
    }
    if(isPrime){
      prime.push(index;
    }
  }
  for (let index = 0; index < prime.length; index++) {
    console.log(prime[index]);
    
    
  }