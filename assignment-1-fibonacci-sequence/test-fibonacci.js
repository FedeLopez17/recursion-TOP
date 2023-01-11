import randomIntegerInRange from "../helper-functions/randomIntegerInRange.js";

export default function testFibonacci(fibonacciFunction, cliArgument) {
  const fibonacciLimitArgument = Number(
    cliArgument || randomIntegerInRange(1, 15)
  );

  console.log(`
    First ${fibonacciLimitArgument} numbers from the Fibonacci sequence: 
    ${fibonacciFunction(fibonacciLimitArgument)}
  `);
}
