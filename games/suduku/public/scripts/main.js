import Sudoku from "../../src/engine/sudoku.js";

const board = document.getElementById("sudoku-board");

const engine = new Sudoku();
let puzzle = [];
let solution = [];

const generateSudoku = ()=>{

    const difficulty = document.getElementById("difficulty").value;

    const result = engine.generate(difficulty);

    puzzle = result.puzzle;
    solution = result.solution;
    console.log(solution);
    
    renderBoard(result.puzzle);
}

const  renderBoard = (grid) =>{
    board.innerHTML = "";
    for(let r=0;r<9;r++){
        for(let c=0;c<9;c++){
           const input = document.createElement("input");

            input.type="text";
            input.maxLength="1";
            input.classList.add("cell");

            if(grid[r][c] !== 0){
                input.value = grid[r][c];
                input.disabled = true;
            }

            input.dataset.row = r;
            input.dataset.col = c;

            board.appendChild(input);
        }
    }
}

const checkSolution = () =>{
    const cells = document.querySelectorAll(".cell");
    let correct = true;

    cells.forEach(cell => {
        const r = cell.dataset.row;
        const c = cell.dataset.col;

        if(!cell.disabled){
            if(parseInt(cell.value) !== solution[r][c]){
                cell.style.background = "#ffb3b3";
                correct = false;
            }else{
                cell.style.background = "#b3ffb3";
            }
        }
    });

    if(correct){
        alert("Correct Solution!");
    }
}

const generateBtn = document.getElementById("generate")
generateBtn.onclick = generateSudoku;

const checkBtn = document.getElementById("check")
checkBtn.onclick = checkSolution;