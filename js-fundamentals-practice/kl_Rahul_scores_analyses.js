const klrahulTestScores = [
  4, 126, 12, 110, 4, 158, 78, 70, 10, 24, 199, 12, 74, 141, 67, 111, 57, 85,
  79, 7, 14, 16, 54, 17, 18, 59, 19, 186, 0, 37, 46, 2, 9, 82, 15, 110, 134, 8,
  63, 146, 58, 22, 45, 12, 20, 18, 105, 8, 108, 38, 68, 12, 103, 44, 88, 24,
  17, 179, 57, 139, 136, 21, 100, 96
];

const klrahulODIScores = [
  100, 63, 9, 0, 11, 0, 88, 62, 64, 75, 97, 19, 34, 39, 111, 58, 0, 41, 42, 34,
  1, 1, 2, 4, 4, 5, 5, 6, 7, 7, 7, 8, 8, 8, 9, 9, 10, 11, 11, 12, 12, 14, 17,
  19, 19, 19, 21, 21, 23, 26, 26, 26, 27, 30, 30, 31, 32, 33, 38, 39, 39, 39,
  40, 47, 48, 49, 52, 55, 56, 57, 60, 66, 73, 76, 77, 77, 80, 102, 102, 108,
  111, 112
];

const klrahulIPLScores = [
  12, 8, 20, 27, 25, 46, 6, 18, 10, 14, 5, 44, 2, 24, 0, 25, 17, 25, 23, 7, 51,
  51, 52, 38, 42, 68, 16, 38, 0, 11, 51, 47, 37, 18, 60, 23, 32, 24, 84, 95,
  66, 21, 94, 7, 4, 1, 71, 15, 55, 71, 100, 18, 52, 12, 42, 79, 2, 71, 21, 130,
  69, 17, 63, 11, 74, 61, 77, 15, 27, 28, 46, 29, 91, 5, 61, 4, 60, 19, 91, 49,
  21, 21, 67, 39, 98, 0, 40, 68, 24, 0, 103, 30, 103, 6, 77, 8, 10, 68, 79, 8,
  20, 35, 18, 74, 39, 68, 12, 0, 58, 15, 20, 33, 39, 39, 82, 16, 76, 28, 25,
  29, 5, 55, 15, 77, 87, 15, 38, 28, 57, 41, 7, 10, 112, 11, 35,
];

const klrahulT20Scores = [
  0, 47, 22, 110, 8, 71, 22, 24, 61, 89, 4, 18, 24, 70, 101, 6, 19, 16, 26, 17,
  13, 14, 62, 11, 91, 15, 8, 52, 50, 47, 20, 45, 54, 56, 57, 27, 39, 45, 51, 30,
  0, 1, 0, 0, 14, 3, 18, 69, 50, 54, 15, 65, 0, 36, 28, 6, 62, 55, 10, 1, 51,
  57, 4, 9, 9, 50, 51, 5
]

const totalScores = [].concat(
  klrahulIPLScores,
  klrahulODIScores,
  klrahulT20Scores,
  klrahulTestScores
);
console.log(totalScores);


function sort(data) {
  let sortedData = data.slice();
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }
  return sortedData;
}

function meanOf(data) {
  let total = 0;
  for (let index = 0; index < data.length; index++) {
    total += data[index];
  }
  return total / data.length;
}

function medianOf(data) {
  const sortedData = sort(data);
  const dataSize = data.length
  const isEven = dataSize % 2 == 0;
  if (isEven) {
    return (sortedData[(dataSize / 2)] + sortedData[(dataSize / 2) + 1]) / 2;
  }
  return sortedData[(dataSize + 1) / 2];
}

function square(value) {
  return value * value;
}

function differenceSqr(value1, value2) {
  return square(value1 - value2);
}

function standardDeviation(data) {
  let sum = 0;
  let mean = 45.73;
  for (let index = 0; index < data.length; index++) {
    sum += differenceSqr(data[index], mean);
  }
  return Math.sqrt(sum / data.length);
}


function main() {
  console.log(medianOf(klrahulIPLScores));
  console.log(meanOf(klrahulIPLScores));
  console.log(standardDeviation(klrahulIPLScores));
  console.log(standardDeviation(totalScores));

}

main();
