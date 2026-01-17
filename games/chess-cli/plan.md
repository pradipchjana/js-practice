**High-Level Plan**
1. Project setup: init deno project add basic required thing

2. Board Repesentation: create function for basic chessboard and display

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
4                 3
3                 3
2 P P P P P P P P 2
1 R N B Q K B N R 1
  a b c d e f g h 
