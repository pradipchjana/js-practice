# Right-Aligned Triangle

## Instructions

Your task is to extend the functionality of the generatePattern(style, dimensions) function to support a new pattern type: **right-aligned-triangle**.

For this assignment, the style parameter will be "right-aligned-triangle", and the dimensions parameter will be an array containing a **single number** [size] where:

size specifies the number of rows in the triangle.
Each row is right-aligned, meaning that the * characters are preceded by spaces ( ) to align them to the right edge of the triangle.

### Pattern Description

The triangle starts with 1 * on the rightmost column of the first row and increases in width by 1 * for each subsequent row.
Spaces ( ) are added before the * characters in each row to ensure the triangle is aligned to the right.
If size is 0, the triangle is considered empty, and the function should return an **empty string**.

---

### Examples

javascript
generatePattern("right-aligned-triangle", [3]);
// Output:
  *
 **
***

generatePattern("right-aligned-triangle", [5]);
// Output:
    *
   **
  ***
 ****
*****

generatePattern("right-aligned-triangle", [1]);
// Output:
*

generatePattern("right-aligned-triangle", [0]);
// Output: (empty string)

---

### Notes

The right-aligned triangle pattern should properly handle edge cases:
  - If size is 1, the function should return a single * without any spaces.
  - If size is 0, the function should return an empty string.
  - For larger values of size, ensure the correct number of spaces and * characters per row.
Each line of the output should be separated by a **newline character (\n)**.
Ensure that the function works for both small and large values of size.