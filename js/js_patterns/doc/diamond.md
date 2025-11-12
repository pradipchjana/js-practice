 # Assignment: Diamond Pattern

## Instructions

Your task is to extend the functionality of the generatePattern(style, dimensions) function to support a new pattern type: **diamond**.

For this assignment, the style parameter will be "diamond", and the dimensions parameter will be an array containing a **single number** [size] where:

size specifies the width and height of the diamond (both are the same).
**Only odd numbers are valid for size**:
  - If size is an even number, your function should generate a diamond for the closest **odd number below it**.
  - For example, if size = 4, the function should generate a diamond of size 3.

### Pattern Description

The diamond is symmetrical, with a maximum width of size at its middle row.
Spaces ( ) are used to center-align the rows so that the diamond is properly shaped.
There should be **no trailing spaces** after the * on any row.
If size is 0 or less, the diamond is considered empty, and the function should return an **empty string**.

---

### Examples

javascript
generatePattern("diamond", [3]);
// Output:
 *
***
 *

generatePattern("diamond", [5]);
// Output:
  *
 ***
*****
 ***
  *

generatePattern("diamond", [4]); // Closest odd size is 3
// Output:
 *
***
 *

generatePattern("diamond", [1]);
// Output:
*

generatePattern("diamond", [0]);
// Output: (empty string)

---

### Notes

The diamond pattern should properly handle edge cases:
  - If size is 1, the function should return a single *.
  - If size is 0 or negative, the function should return an empty string.
  - If size is even, generate a diamond using the closest odd number below it.
The number of * in each row increases by 2 for the top half, reaches size in the middle row, and decreases symmetrically for the bottom half.
Ensure that the function works for both small and large values of size.
Each line of the output should be separated by a **newline character (\n)**.