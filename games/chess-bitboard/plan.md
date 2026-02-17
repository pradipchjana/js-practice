**High-Level Plan**
1. Project setup: init deno project add basic required thing

2. Board Representation: create function for basic chessboard and display

3. Add module for pieces, place them in a board, and test rendering

4. handel user input, parsing the user input

5. Basic move validation

6. add capturing rules

7. add checkmate rules

**Directories structure**
chess-cli/
|--src/
|
|--test/
|
|--deno.json
|--main.js

**add task**
start: deno run -A main.js
test: deno test -A

**Board Structure**
  a b c d e f g h 
8 r n b q k b n r 8
7 p p p p p p p p 7
6                 6
5                 5
4                 4
3                 3
2 P P P P P P P P 2
1 R N B Q K B N R 1
  a b c d e f g h 

**input**
input can e2e4 or e2-e4 or e2 to e4

initialBoard(){
  using bit board...
}

## Data Structure
```
bit board: 56 57 58 59 60 61 62 63
48 49 50 51 52 53 54 55
40 41 42 43 44 45 46 47
32 33 34 35 36 37 38 39
24 25 26 27 28 29 30 31
16 17 18 19 20 21 22 23
8 9 10 11 12 13 14 15
0 1 2 3 4 5 6 7
```
```
chessboard: a8 .. .. .. .. .. .. h8
.. .. .. .. .. .. .. ..
.. .. .. .. .. .. .. ..
.. .. .. .. .. .. .. ..
.. .. .. .. .. .. .. ..
.. .. .. .. .. .. .. ..
.. .. .. .. .. .. .. ..
a1 .. .. .. .. .. .. h1
```