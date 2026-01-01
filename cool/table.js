const data = { "c": "a", 2: "bcdefgh" };

const findHighestCol = (keys) =>
  keys.reduce(
    (max, value) => value.length > max ? value.length : max,
    "(idx)".length,
  );

const makeTable = (data) => {
  const firstColLength = findHighestCol(Object.keys(data)) + 2;
  const secondColLength = findHighestCol(Object.values(data)) + 2;
  console.log("_".repeat((firstColLength + secondColLength) * 1.25));
  console.log(`| (idx) | ${"Values".padEnd(secondColLength)} |`);
  console.log("_".repeat((firstColLength + secondColLength) * 1.25));
  for (const [key, value] of Object.entries(data)) {
    console.log(
      `| ${key.padEnd(firstColLength)}| ${value.padEnd(secondColLength)}|`,
    );
  }
  console.log("_".repeat((firstColLength + secondColLength) * 1.25));
};

makeTable(data);
