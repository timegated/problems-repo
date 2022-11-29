const arr = [91, 2, 33, 51, 54, 39, 34, 61, 34]; // expect 54
const arr2 = [87, 9, 10, 1, 2, 3, 65] // expect 10

// find the index of the third largest number in the array
// avoid modifying the array
const findIndex = (arr, index) => {
  const map = new Map();
  const copy = [...arr].sort((a, b) => b - a);
  for (let i = copy.length; i >= 0; i--) {
    map.set(i, copy[i]);
  }
  return arr.indexOf(map.get(2));
}

const findIndex2 = (arr) => {
  const copy = [...arr].sort((a,b) => b - a);
  return arr.indexOf(copy[2]);
}

console.log(findIndex(arr2));