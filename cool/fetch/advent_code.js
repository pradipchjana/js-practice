console.time("hello")
const url =
  "https://adventofcode.com/2019/leaderboard/private/view/829678.json";

const sessionCookie = Deno.env.get("AOC_SESSION");
if (!sessionCookie) {
  console.error("Missing AOC_SESSION environment variable");
  Deno.exit(1);
}

const response = await fetch(url, {
  method: "GET",
  headers: {
    "Cookie": `session=${sessionCookie}`,
    "User-Agent": "Pradip-AoC-Leaderboard-Script",
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