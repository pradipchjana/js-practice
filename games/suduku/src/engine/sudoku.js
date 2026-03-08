export default class Sudoku {
  constructor() {
    this.row = new Uint16Array(9);
    this.col = new Uint16Array(9);
    this.box = new Uint16Array(9);
    this.board = Array(9).fill().map(() => new Uint8Array(9));
    this.boxIdx = new Uint8Array(81);
    for (let i = 0; i < 81; i++) {
      const r = i / 9 | 0;
      const c = i % 9;
      this.boxIdx[i] = (r / 3 | 0) * 3 + (c / 3 | 0);
    }
  }

  fillDiagonal() {
    for (let i = 0; i < 9; i += 3) {
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      this.shuffle(nums);
      let k = 0;
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          const num = nums[k++];
          const idx = (i + r) * 9 + (i + c);
          this.board[i + r][i + c] = num;

          const mask = 1 << num;
          this.row[i + r] |= mask;
          this.col[i + c] |= mask;
          this.box[this.boxIdx[idx]] |= mask;
        }
      }
    }
  }

  shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
      const j = Math.random() * (i + 1) | 0;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  solve(pos = 0) {
    if (pos === 81) return true;
    
    const r = pos /9 | 0;
    const c = pos %9;
    const b = this.boxIdx[pos];

    if (this.board[r][c] !== 0) {
      return this.solve(pos + 1);
    }

    const order = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.shuffle(order);

    for (let i = 0; i <= 9; i++) {
      const num = order[i];
      const mask = 1 << num;

      if (
        (this.row[r] & mask) === 0 &&
        (this.col[c] & mask) === 0 &&
        (this.box[b] & mask) === 0
      ) {
        this.board[r][c] = num;
        this.row[r] |= mask;
        this.col[c] |= mask;
        this.box[b] |= mask;

        if (this.solve(pos + 1)) return true;

        this.board[r][c] = 0;
        this.row[r] &= ~mask;
        this.col[c] &= ~mask;
        this.box[b] &= ~mask;
      }
    }

    return false;
  }

  digHoles(targetEmpty = 40) {
    const positions = Array.from({ length: 81 }, (_, i) => i);
    this.shuffle(positions);

    let removed = 0;
    const original = this.board.map((row) => row.slice());

    for (const pos of positions) {
      if (removed >= targetEmpty) break;

      const r = pos / 9 | 0;
      const c = pos % 9;
      const backup = this.board[r][c];

      this.board[r][c] = 0;

      removed++;

      if (removed > targetEmpty + 5) {
        let clues = 0;
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 9; j++) {
            if (this.board[i][j] !== 0) clues++;
          }
        }
        if (clues < 81 - targetEmpty - 3) {
          this.board[r][c] = backup;
          removed--;
        }
      }
    }
    return {
      puzzle: this.board, solution:original
    }
  }

  generate(difficulty = "medium") {
    const emptyCount = {
      "medium": 42
    }[difficulty] || 42;

    this.row.fill(0);
    this.col.fill(0);
    this.box.fill(0);
    this.board.forEach(row => row.fill(0));

    this.fillDiagonal();
    
    this.solve();
    
    const result = this.digHoles(emptyCount);

    return {
      puzzle: result.puzzle.map(r => [...r]),
      solution: result.solution.map(r => [...r])
    };
  }

  print(board) {
    console.log(board.map(row => row.join()).join('\n'));
  }
}
