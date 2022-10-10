// write a function that loops through an array recursively

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function recLoop(arr, n) {
  if (n < 0) return;
  if (n > arr.length) throw new Error('n cannot be greater than the array length');
  console.log(arr[n]);
  return recLoop(arr, n - 1)
};

// console.log(recLoop([1, 2, 3, 4, 5], [1, 2, 3, 4, 5].length));
// console.log(recLoop(arr1, arr1.length));

function searchArray(arr, query, count = 0, length = 0) {
  // if our length is less than the arr length do a search starting at length 0
  if (length < arr.length) {
    let item;
    // if we find another array within the original while recursing
    if (Array.isArray(arr[length])) {
      return searchArray(arr[length], query, count, 0);
    }
    // check if query matches
    if (arr[length] === query) {
      item = arr[length];
      return searchArray(arr, query, count += 1, length += 1), { item, count };
    }
    return searchArray(arr, query, count, length += 1);
  }
  return {
    count,
  };
}

console.log(searchArray(arr1, 9));