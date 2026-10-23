// copy a array using spread out operator
const a = [1, 2, 3, 4, 5];

const b = [...a];

console.log({ b, a });
b[0] = 11;
console.log({ b, a });

//find interns information

const interns = {
  santo: { name: "Santo", age: 15, state: "AI" },
  shivaji: { name: "Shivaji", age: 45, state: "BH" },
  samiran: { name: "Samiron", age: 53, state: "KL" }
}

for (const key in interns) {
  console.log(key);
}

for (const [key, value] of Object.entries(interns)) {
  console.log([key, value]);
  
}

for (const key of Object.keys(interns)) {
  console.log(key);
  
}

for (const key of Object.values(interns)) {
  console.log(key);
  
}

//