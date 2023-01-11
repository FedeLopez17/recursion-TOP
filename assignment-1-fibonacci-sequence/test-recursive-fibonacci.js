import testFibonacci from "./test-fibonacci.js";
import recursivefibonacciUpTo from "./recursive-fibonacci.js";

const cliArgument = process.argv[2];
testFibonacci(recursivefibonacciUpTo, cliArgument);
