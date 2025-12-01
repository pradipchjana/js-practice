let i = 0;
const countUntil = () => {
 console.log(" ".repeat(i *2 % 5),i++," ".repeat(i *2 % 5),i++);
 if (i === 30) {
   clearInterval(timeOutId);
 }
}
const timeOutId = setInterval(countUntil, 1000);
