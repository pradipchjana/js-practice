# Hollow Rectangle

## Instructions

Your task is to extend the functionality of the `generatePattern(style, dimensions)` function to support a new pattern type: **hollow rectangle**.

For this assignment, the `style` parameter will be `"hollow-rectangle"`, and the `dimensions` parameter will be an array `[columns, rows]` where:

- `columns` is the number of columns in the rectangle.
- `rows` is the number of rows in the rectangle.

### Pattern Description

- The first and last rows of the rectangle should be completely filled with `*` characters.
- All rows in between (if any) should begin and end with a `*` and have spaces (` `) in between.
- If either dimension is `0` (e.g., `[0, X]` or `[X, 0]`), the rectangle is considered empty, and the function should return an **empty string**.

---

### Examples
generatePattern("hollow-rectangle", [4, 3]);
// Output:
****
*  *
****

generatePattern("hollow-rectangle", [5, 4]);
// Output:
*****
*   *
*   *
*****

generatePattern("hollow-rectangle", [6, 2]);
// Output:
******
******

generatePattern("hollow-rectangle", [5, 1]);
// Output:
*****

generatePattern("hollow-rectangle", [1, 5]);
// Output:
*
*
*
*
*

generatePattern("hollow-rectangle", [0, 3]);
// Output: (empty string)

generatePattern("hollow-rectangle", [7, 0]);
// Output: (empty string)

---

### Notes

- The hollow rectangle should properly handle edge cases:
  - If `rows` is 1, the rectangle will just be a single row of `*` characters.
  - If `columns` is 1, the rectangle will be a vertical line of `*` characters (one per row).
  - If `columns` and `rows` are both greater than 1, the hollow pattern will appear as described.
- Each line of the output should be separated by a **newline character (`\n`)**.
- Ensure that the function works for both small and large dimensions.

Happy coding!

---