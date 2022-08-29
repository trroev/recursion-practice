const mergeSort = (arr) => {
  const merge = (left, right) => {
    let sortedArr = []; // initialize new array
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift()); // if left 1st index is lower than right, add it to new array
      } else {
        sortedArr.push(right.shift()); // if right 1st index is lower than left, add it to new array
      }
    }
    return [...sortedArr, ...left, ...right]; // return the sorted array
  };

  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2); // divide array in half at the middle
  let left = mergeSort(arr.slice(0, middle)); // sort left side of array
  let right = mergeSort(arr.slice(middle)); // sort right side of array

  return merge(left, right); // merge the sorted left and right arrays
};

console.log(mergeSort([])); // []
console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mergeSort([6, 9, -3, 0, 81, -33, 69])); // [-33, -3, 0, 6, 9, 69, 81]
