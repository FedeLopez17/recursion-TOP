export default function recursiveMergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;
  else {
    // Recursive case
    const leftHalf = arr.slice(0, Math.ceil(arr.length / 2));
    const rightHalf = arr.slice(Math.ceil(arr.length / 2));
    const sortedLeftHalf = recursiveMergeSort(leftHalf);
    const sortedRightHalf = recursiveMergeSort(rightHalf);

    return merge(sortedLeftHalf, sortedRightHalf);
  }

  function merge(left, right) {
    let sortedArray = [];

    while (left.length || right.length) {
      // If one half is empty, copy all values from the remaining array into the sorted array and break the loop.
      if ((left.length && !right.length) || (!left.length && right.length)) {
        sortedArray = sortedArray.concat(left.length ? left : right);
        break;
      }

      // Else, compare the first element of each half and move the smaller element out of its containing array and into the sorted array.
      sortedArray.push(left[0] <= right[0] ? left.shift() : right.shift());
    }

    return sortedArray;
  }
}
