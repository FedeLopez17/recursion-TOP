function _randomIntegerBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function testFibonacci(fibonacciFunction, cliArgument) {
  const fibonacciLimitArgument = Number(
    cliArgument || _randomIntegerBetween(1, 15)
  );

  console.log(
    `First ${fibonacciLimitArgument} numbers from the Fibonacci sequence: 
    ${fibonacciFunction(fibonacciLimitArgument)}`
  );
}
