# Recursion project

This project is part of The Odin Project's curriculum.<br>
[See the assignments](https://www.theodinproject.com/lessons/javascript-recursion).

It served me as further recursion practice and it was also my first time using Node.js to run JavaScript code from the terminal.

## Assignment 1: Fibonacci
 - Using iteration, write a function which takes a number and returns an array containing that many numbers from the [Fibonacci Sequence](https://www.mathsisfun.com/numbers/fibonacci-sequence.html).<br>
Using an example input of `8`, this method should return the array `[0, 1, 1, 2, 3, 5, 8, 13]`.
 - Now write another method which solves the same problem recursively.

### How to test: 
To test the Fibonacci functions, you can either run `test-iterative-fibonacci.js` or `test-recursive-fibonacci.js` using Node.js.<br>
A single number can be provided as argument. However, if an argument is not provided, the function will be run with a randomly generated number as argument.

### Example:
`node [path to test-recursive-fibonacci.js] 10`

## Assignment 2: Merge Sort
 - Build a recursive [Merge Sort](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/) function that takes in an array and returns a sorted array.

### How to test:
To test the Merge Sort function, run `test-merge-sort.js` using Node.js.<br>
Multiple numbers can be provided as argument. However, just like the Fibonacci functions, if an argument is not provided, the function will be run with a randomly generated set of numbers as argument.

### Example:
`node [path to test-merge-sort.js] 10 8 1 3 99 -10 0 6 27`
