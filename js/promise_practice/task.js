const task = (des, time,failProb = 0) => {
  const start = Date.now();
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const end = Date.now();
      const isFailed = Math.random() < failProb;
      if (isFailed) {
        reject({ des, start, end, duration: end - start,isFailed })
      }
      resolve({ des, start, end, duration: end - start,isFailed });
    }, time);
  }).then(console.log,console.log);
};

const TASK = {
  "task1": () => task("task1", 3000),
  "task2": () => task("task2", 2000,0.5),
  "task3": () => task("task3", 1000,1.0),
};

const tasks = ["task1", "task2", "task3"];

const serialization = () => {
  tasks.reduce((p, t) => p.then((_) => TASK[t]()), Promise.resolve());
}

serialization();

const paralization = () => {
  tasks.map((t) =>TASK[t]());
}
paralization();
