
# Alternating Rectangle Pattern

## Instructions
Your task is to extend the functionality of the `generatePattern(style, dimensions)` function to support a new pattern type: **alternating rectangle**.

For this assignment, the `style` parameter will be `"alternating-rectangle"`, and the `dimensions` parameter will be an array `[columns, rows]` where:
- `columns` is the number of columns in the rectangle.
- `rows` is the number of rows in the rectangle.

### Pattern Description
- Each row alternates between being completely filled with `*` characters and `-` characters:
  - Odd-numbered rows (1st, 3rd, 5th, etc.) are filled with `*`.
  - Even-numbered rows (2nd, 4th, 6th, etc.) are filled with `-`.
- If either dimension is `0` (e.g., `[0, X]` or `[X, 0]`), the rectangle is considered empty, and the function should return an **empty string**.

---

### Examples

```javascript
generatePattern("alternating-rectangle", [3, 3]);
// Output:
***
---
***

generatePattern("alternating-rectangle", [5, 4]);
// Output:
*****
-----
*****
-----

generatePattern("alternating-rectangle", [6, 2]);
// Output:
******
------

generatePattern("alternating-rectangle", [4, 1]);
// Output:
****

generatePattern("alternating-rectangle", [0, 5]);
// Output: (empty string)

generatePattern("alternating-rectangle", [7, 0]);
// Output: (empty string)
```

---

### Notes
- The alternating rectangle should properly handle edge cases:
  - If `rows` is 1, the rectangle will consist of a single row of `*`.
  - If `columns` is 1, the rectangle will alternate between a single `*` and `-` for each row.
  - If `columns` and `rows` are both greater than 1, the pattern alternates row by row as described.
- Each line of the output should be separated by a **newline character (`\n`)**.
- Ensure that the function works for both small and large dimensions.

---