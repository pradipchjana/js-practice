const ANSWERS = [
  "The Great Wall of China",
  'Marie Curie',
  'Photosynthesis',
  'Tokyo',
  'Aurora Borealis'
]

const problem1 = [
  'My construction started over two thousand years ago',
  'I am often mistakenly said to be visible from space with the naked eye',
  'My purpose was to protect various Chinese dynasties',
  'My structure is not one continuous line but a series of walls and fortifications',
  'I am the longest man - made structure in the world'
]

const problem2 = [
  'I was the first woman to win a Nobel Prize',
  'My groundbreaking work involved radioactivity',
  'I am the only person to win a Nobel Prize in two different scientific fields Physics and Chemistry',
  'I helped create mobile X - ray units used during World War I known as petities Curies',
  'My maiden name was Sklodowska'
]
const problem3 = [
  'It is a process essential for nearly all life on Earth',
  'It primarily occurs in the leaves of plants',
  'The main products are glucose and oxygen',
  'It requires three main ingredients water carbon dioxide and sunlight',
  'The word literally means putting together with light'
]

const problem4 = [
  'It is the most populous city proper in its country',
  'It was originally known as Edo',
  'You would find the worlds busiest railway station here Shinjuku Station',
  'Its famous for its cherry blossoms and futuristic skyscrapers',
  'It is the capital of Japan'
]

const problem5 = [
  'It is caused by solar winds interacting with the Earths magnetic field',
  'It is primarily seen near the North Pole',
  'The colors are caused by different gases such as oxygen and nitrogen',
  'Its name comes from the Roman goddess of dawn and the Greek word for north wind',
  'It can also be observed near the South Pole where it is called the Southern Lights'
]

const PROBMLEMS = [ problem1, problem2, problem3, problem4, problem5];

function generateNumber() {
  return Math.floor(Math.random() * PROBMLEMS.length);
}

function giveClue() {
  const problemNumber = generateNumber() 
  const problem = PROBMLEMS[problemNumber];
  console.log("Your first hint");
  for (let index = 0; index < 5; index++) {
    console.log(problem[index]);
    const userResponse = prompt("Give your answer");
    if (userResponse === ANSWERS[problemNumber]) {
      console.log("Yeah, You win");
      return;
    }
    console.log("Anothor hint");
  }
  console.log("You Lost");
  return;
}

giveClue();