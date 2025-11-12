Triangle
Instructions
Your task is to extend the functionality of the generatePattern(style, dimensions) function to support a new pattern type: triangle.

For this assignment, the style parameter will be "triangle", and the dimensions parameter will be an array containing a single number [size] where:

size specifies the number of rows in the triangle.
The width of each row corresponds to its row number (1-based). For example, the 1st row has 1 *, the 2nd row has 2 *, and so on.
Pattern Description
The triangle starts with 1 * in the first row and increases in width by 1 * for each subsequent row.
If size is 0, the triangle is considered empty, and the function should return an empty string.
Examples
generatePattern("triangle", [3]);
// Output:
*
**
***

generatePattern("triangle", [5]);
// Output:
*
**
***
****
*****

generatePattern("triangle", [1]);
// Output:
*

generatePattern("triangle", [0]);
// Output: (empty string)
Notes
The triangle pattern should properly handle edge cases:
If size is 1, the function should return a single *.
If size is 0, the function should return an empty string.
For larger values of size, ensure the correct number of rows and * characters per row.
Each line of the output should be separated by a newline character (\n).
Ensure that the function works for both small and large values of size.