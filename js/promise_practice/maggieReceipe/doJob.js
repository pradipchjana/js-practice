const task = (file, time) => {
  const start = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      const end = Date.now();
      resolve(Deno.readTextFile(file));
    }, time);
  }).then(console.log, console.log);
};

const process = tasks => tasks.reduce(
  (p, ta) => p.then((_) => Promise.all(ta.map((t) => task(t, 1000)))),
  Promise.resolve(),
);

const main = () => {
  Deno.readTextFile("maggie.txt").then(rawData => rawData.split("\n").map(x=> x.split(",")))
    .then((tasks) => process(tasks));
};


main();
