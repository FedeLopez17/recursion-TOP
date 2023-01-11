export default function recursivefibonacciUpTo(
  limit,
  fibonacciSequenceArray = []
) {
  // Initial check
  if (limit < 1) return;

  // Base cases
  if (fibonacciSequenceArray.length === limit) return fibonacciSequenceArray;

  // Recursive case
  if (fibonacciSequenceArray.length < 2) {
    fibonacciSequenceArray.push(fibonacciSequenceArray.length);
  } else {
    const previousPair = fibonacciSequenceArray.slice(-2);
    fibonacciSequenceArray.push(previousPair[0] + previousPair[1]);
  }
  return recursivefibonacciUpTo(limit, fibonacciSequenceArray);
}
