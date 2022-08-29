// iterative version
const fibs = (n) => {
  let fibArray = [0, 1]; // initialize the array
  if (n < 0 || isNaN(n)) return "Please choose a positive integer";
  if (n === 0 || n == "") return [];
  if (n === 1) return [0];
  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
};

console.log(fibs(0)); // []
console.log(fibs(1)); //  [0]
console.log(fibs(2)); //  [0, 1]
console.log(fibs(5)); //  [0, 1, 1, 2, 3]
console.log(fibs(11)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(fibs("hello")); // "Please enter a positiver integer"

// recursive version
const fibsRec = (n) => {
  return n < 0 || isNaN(n)
    ? "Please enter a positive integer"
    : n === 0 || n == ""
    ? []
    : n === 1
    ? [0]
    : n === 2
    ? [0, 1]
    : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
};

console.log(fibsRec(0)); // []
console.log(fibsRec(1)); //  [0]
console.log(fibsRec(2)); //  [0, 1]
console.log(fibsRec(5)); //  [0, 1, 1, 2, 3]
console.log(fibsRec(11)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(fibsRec("hello")); // "Please enter a positiver integer"
