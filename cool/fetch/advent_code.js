console.time("hello")
const url =
  "https://adventofcode.com/2019/leaderboard/private/view/829678.json";

const response = await fetch(url, {
  method: "GET",
  headers: {
    "Cookie":
      `session=53616c7465645f5f580cb5f2d8ee6c544ba9e74386ddaed7e01445f27ae2994fa81201a52dfbfd18d124628787aa35c2a6fa1936ac24d31659bd4da82d1fd6c7`,
    "User-Agent": "yourname-deno-aoc",
  },
});

if (!response.ok) {
  console.error("Error:", response.status);
  Deno.exit(1);
}

const data = await response.json();
const output = []
const parseData = (data) => { 
  output.push({
    Name: data.name, Score: data.local_score, stars: "*".repeat(data.stars)
  });
}
const members = data.members

for (const element of Object.values(members)) {
  parseData(element);
}

output.sort((a, b) => b.stars.length - a.stars.length);
console.table(output);
console.log(Deno.writeTextFile("./data.txt", JSON.stringify(data)));
console.timeEnd("hello")