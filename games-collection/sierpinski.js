const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";


const createCanvas = (w, h) => {
  return Array.from({ length: h }, () => Array(w).fill(false));
}

const getRandomVertex = (vertices) => {
  return vertices[Math.floor(Math.random() * vertices.length)];
}

const renderCanvas = (canvas,useColor) => {
  const lines = [];

  for (let y = 0; y < canvas.length; y++) {
    let line = "";

    for (let x = 0; x < canvas[y].length; x++) {
      const upper = canvas[y]?.[x] ?? false;
      const lower = canvas[y + 1]?.[x] ?? false;

      let char = "";
      if (upper && lower) char = "█";
      else if (upper) char = "▀";
      else if (lower) char = "▄";
      else char = " ";
      if (char !== "" && useColor) {
        line += GREEN + char + RESET;
      } else {
        
        line += char;
      }
    }
    lines.push(line);
  }
  return lines.join("\n");
}

const putPoint = (canvas, x, y) => {
  const xi = Math.round(x);
  const yi = Math.round(y);
  if (xi < 0 || xi >= canvas[0].length ||
    yi < 0 || yi >= canvas.length
  ) return;
  canvas[yi][xi] = true;
}

const sierprinski = async (width,height,vertices,useColor) => {
  console.log("Chaos Game -> Sierpinski triangle");
  console.log("press ctrl+c to stop\n");

  const canvas = createCanvas(width, height);
  const current = { x: width / 2, y: height / 2 };
  let iteration = 0;
  const MAX_ITER = 150_000;
  while (true) {
    const target = getRandomVertex(vertices);
    current.x = (current.x + target.x) / 2;
    current.y = (current.y + target.y) / 2;
    putPoint(canvas, current.x, current.y);
    iteration++;

    if (iteration % 400 === 0 || iteration === MAX_ITER) {
      console.clear();
      console.log(`Chaos game - ${iteration} points`);
      console.log(renderCanvas(canvas,useColor));
      console.log("".repeat(24) + "heloo");
    };
    if (iteration >= MAX_ITER) {
      console.log("Finished");
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}

const main = (args) => {
  const width = +args[0]||90;
  const height = +args[1] || 55;
  const useColor =true;

const vertices = [
  { x: width / 2, y: 1 },
  { x: 1, y: height - 2 },
  { x: width - 2, y: height - 2 }
]
  sierprinski(width,height,vertices,useColor);
}

main(Deno.args);