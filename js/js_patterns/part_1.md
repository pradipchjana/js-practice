# Filled Rectangle

## Instructions
Your task is to implement the function `generatePattern(style, dimensions)` that returns a newline-separated string representing a specific pattern. 

For this assignment, you will create a **filled rectangle** pattern. The `style` parameter will be `"filled-rectangle"`, and the `dimensions` parameter will be an array `[columns, rows]` where:
- `columns` is the number of columns in the rectangle.
- `rows` is the number of rows in the rectangle.

The rectangle should be filled with `*` characters. Each row should consist of `columns` number of `*` characters, and there should be `rows` rows in total.

### Special Cases
- If either dimension is `0` (e.g., `[0, X]` or `[X, 0]`), the rectangle is considered empty, and the function should return an **empty string**.

---

### Examples
javascript
generatePattern("filled-rectangle", [5, 3]);
// Output:
*****
*****
*****

generatePattern("filled-rectangle", [2, 4]);
// Output:
**
**
**
**

generatePattern("filled-rectangle", [0, 5]);
// Output: (empty string)

generatePattern("filled-rectangle", [7, 0]);
// Output: (empty string)
---

### Notes
- Each line of the output should be separated by a **newline character (`\n`)**.
- Ensure that the function works for both small and large dimensions.

---