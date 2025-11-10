

function testCountVowels(input, expected){
  const result = countVowels(input);
  const checkValue = result === expected ? '✅' : '❌';
  console.log(checkValue, result, expected);
}

function testAll(){
  testCountVowels(input, expected);
}
testAll();
testCountwords('bcdf', 1);
  testCountwords("  \n  ab  cd ", 2);
  testCountwords("        aA  \t\tbb   ", 2);
  testCountwords('\t\t', 0);
  testCountwords('    cd ae E  ', 3);

    testCountwords("  \n  ab  cd ", 2);
  testCountwords("        aA  \t\tbb   ", 2);