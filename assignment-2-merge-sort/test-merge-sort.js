import randomIntegerInRange from "../helper-functions/randomIntegerInRange.js";
import recursiveMergeSort from "./recursive-merge-sort.js";

function _makeRandomArray() {
  const randomArray = [];

  for (let i = 0; i < randomIntegerInRange(1, 15); i++) {
    randomArray.push(randomIntegerInRange(0, 100));
  }

  return randomArray;
}

function testMergeSort(mergeSortFunction, cliArgument) {
  const inputArray = cliArgument || _makeRandomArray();

  console.log(`
    Original array: ${inputArray}
    Sorted array: ${mergeSortFunction(inputArray)}
  `);
}

const cliArgument = process.argv[2] ? process.argv.slice(2).map(Number) : null;
testMergeSort(recursiveMergeSort, cliArgument);
