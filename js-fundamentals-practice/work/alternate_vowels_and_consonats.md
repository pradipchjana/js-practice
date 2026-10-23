 *Problem: Spliting a Word by Alternating Vowels and Consonats* 

Write a ptogram that takes a single word as input and prints out 'new words' acording to the following rules:

1. Start a new word with the `first unused letter` of the input word.
2. Alternate between `vowel` and `consonant`, starting with the `type of the first letter`.
    # if the first letter is a vowel -> next must be a consonant , then vowel, then consonant, and so on.
    # if then first letter is a consonat -> next must be a vowel , then consonat , then vowel, and so on.
3. To extend the current word, pick the `next letter of the required type that comes after next letter used`.
4. Stop the current word when no further letters of the required type are available after the last used letter.
5. Repeat the process with the remaining letters (in order) until all letters are used.
6. Print each word `separated by commas`.

#input: string (all letter in word is lowercase)
#output: string (all words separate by comma)

*Test Cases*
|input|Output|
|'a'|'a'|
|'ab'|'ab'|
|'ba'|'ba'|
|'abc'|'ab,c'|
|'acb'|'ac,b'|
|'cab'|'cab'|
|'cba'|'ca,b'|
|'abcd'|'ab,c,d'|
|'bacd'|'bac,d'|
|'bcad'|'bad,c,d'|
|'abcde'|'abe',c,d'|
|'apple'|'ape,p,l'|
|'bbaacdef'|'bacef,bad'|
|'aaabbb'|'ab,ab,ab'|
|'thoughtworks'|'togor,huh,t,w,k,s'|

