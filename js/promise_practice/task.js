const task = (des, time, type, failProb = 0) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    setTimeout(() => {
      const end = Date.now();
      const isFailed = Math.random() < failProb;
      if (isFailed) {
        reject({ des, start, end, duration: end - start, isFailed, type });
      }
      resolve({ des, start, end, duration: end - start, isFailed, type });
    }, time);
  }).then(console.log, console.log);
};

const TASK = {
  "task1": (type) => task("task1", 3000, type),
  "task2": (type) => task("task2", 2000, type, 0.5),
  "task3": (type) => task("task3", 1000, type, 1.0),
  "task4": (type) => task("task4", 4000, type),
  "task5": (type) => task("task5", 3000, type),
};

const tasks = [["task1"], ["task2"], ["task3", "task4"], ["task5"]];

const main = (tasks) => {
  tasks.reduce((p, ta) =>
    p.then((_) => {
      const type = ta.length < 2 ? "serial" : "parralal";
      return Promise.all(ta.map((t) => TASK[t](type)));
    }), Promise.resolve());
};

main(tasks);
