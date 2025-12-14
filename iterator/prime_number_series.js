function* primeNumberSeries(limit) {
  const prime = Array.from({ length: limit }, () => true);
  prime[0] = false;
  prime[1] = false;
  for (let index = 2; index <= limit; index++) {
    if (prime[index]) {
      yield index;
      for (let term = index * 2; term <= limit; term = term + index) {
        prime[term] = false;
      }
    }
  }
}