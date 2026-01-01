// Promise.resolve("foo")
//   .then(
//     (string) =>
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           string += "bar";
//           resolve(string);
//         }, 1);
//       }),
//   )
//   .then((string) => {
//     setTimeout(() => {
//       string += "baz";
//       console.log(string);
//     }, 1);
//     return string;
//   })
//   .then((string) => {
//     console.log(
//       "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising",
//     );
//     console.log(string);
//   });

function task(name, delay) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(name);
      resolve();
    }, delay)
  );
}

// task("A", 1000);
// task("B", 500);
// task("C", 300);

task("A", 1000)
  .then(() => task("B", 100))
  .then(() => task("C", 300));
