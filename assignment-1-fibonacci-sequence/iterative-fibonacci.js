import testFibonacci from "./test-fibonacci.js";

function fibonacciUpTo(limit) {
  const fibonacciSequenceArray = [];

  for (let index = 0; index < limit; index++) {
    if (index < 2) {
      fibonacciSequenceArray[index] = index;
      continue;
    }

    const PreviousPair = fibonacciSequenceArray.slice(index - 2, index);
    fibonacciSequenceArray[index] = PreviousPair[0] + PreviousPair[1];
  }

  return fibonacciSequenceArray;
}

const cliArgument = process.argv[2];
testFibonacci(fibonacciUpTo, cliArgument);
