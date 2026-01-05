const task = async (file, time) => {
  const start = Date.now();
  const instruction = await Deno.readTextFile(file);
  return new Promise((resolve) => {
    setTimeout(() => {
      const end = Date.now();
      resolve({ instruction, start, end, time });
    }, time);
  }).then(console.table, console.log);
};

const process = (tasks) =>
  tasks.reduce(
    (p, ta) =>
      p.then((_) =>
        Promise.all(ta.map((t) => {
          const [file, time] = t.split("/");
          return task(file, time);
        }))
      ),
    Promise.resolve(),
  );

const main = () => {
  Deno.readTextFile("maggie.txt").then((rawData) =>
    rawData.split("\n").map((x) => x.split(","))
  )
    .then((tasks) => process(tasks));
};

main();
