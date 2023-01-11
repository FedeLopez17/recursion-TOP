import testFibonacci from "./test-fibonacci.js";
import iterativefibonacciUpTo from "./iterative-fibonacci.js";

const cliArgument = process.argv[2];
testFibonacci(iterativefibonacciUpTo, cliArgument);
