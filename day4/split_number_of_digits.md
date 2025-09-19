for split number of digits ....
inpout   | Expectations 
12  | 1 2
123 | 1 2 3
456 | 4 5 6
57  | 5 7

how will I get 2 from 12?
->12 % 10 = 2
how will I get 1 from 12?
-> 12 % 10 = 2
  12 - 2 = 10
  10 / 10 = 1

what about 123?
if do this process repeatedly then I can..

but how many times..?
123
-> 123 % 10 = 3
123 - 3 = 120 
120 / 10 = 12

12 % 10 = 2
12 - 2 = 10
10 / 10 = 1

1 % 10 = 1
1 - 1 = 0
0 / 10 = undefined
so i need to stop when it is 0
