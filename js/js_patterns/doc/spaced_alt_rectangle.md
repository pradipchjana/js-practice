# Spaced Alternating Rectangle Pattern

## Instructions

Your task is to extend the functionality of the generatePattern(style, dimensions) function to support a new pattern type: **spaced-alternating rectangle**.

For this assignment, the style parameter will be "spaced-alternating-rectangle", and the dimensions parameter will be an array [columns, rows] where:

columns is the number of columns in the rectangle.
rows is the number of rows in the rectangle.

### Pattern Description

Each row alternates in the following cycle:
  1. A row of * characters.
  2. A row of - characters.
  3. A row of spaces ( ) **(not an empty line)** with no visible characters.
After the third row, the cycle repeats starting with *.
If either dimension is 0 (e.g., [0, X] or [X, 0]), the rectangle is considered empty, and the function should return an **empty string**.

---

### Examples

javascript
generatePattern("spaced-alternating-rectangle", [3, 4]);
// Output:
***
---

***

generatePattern("spaced-alternating-rectangle", [5, 6]);
// Output:
*****
-----

*****
-----


generatePattern("spaced-alternating-rectangle", [4, 3]);
// Output:
****
----


generatePattern("spaced-alternating-rectangle", [6, 2]);
// Output:
******
------

generatePattern("spaced-alternating-rectangle", [0, 3]);
// Output: (empty string)

generatePattern("spaced-alternating-rectangle", [7, 0]);
// Output: (empty string)



---

### Notes

**Important:** The third line in the pattern contains spaces ( ), which are not visible characters but should still occupy the width of the rectangle. It is **not an empty line**.
The spaced-alternating rectangle should properly handle edge cases:
  - If rows is 1, the rectangle will just be a single row of *.
  - If columns is 1, the rectangle will alternate between *, -, and a single blank row for each row.
  - For larger values of rows, the cycle (*, -,  ) repeats as described.
Each line of the output should be separated by a **newline character (\n)**.
Ensure that the function works for both small and large dimensions.