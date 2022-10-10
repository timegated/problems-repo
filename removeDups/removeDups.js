// remove duplicate elements in an array
// return the result as an array

const someArr = ['cat', 'dog', 'cat', 'dog'];
const numArr = [1, 2, 3, 4, 4, 5, 6, 7];


const removeDups = (arr) => {
  const uniqueArr = []; // an array where every item is unique

  for (let item of arr) {
    if (uniqueArr.indexOf(item) === -1) { // Check if the item is already present in the array
      uniqueArr.push(item);
    }
  }

  return uniqueArr;
};

// console.log(removeDups(someArr));

// with a set

const removeWithSet = (arr) => {
  return Array.from(new Set(arr));
};

// console.log(removeWithSet(someArr));

function withMap(arr) {
  const map = new Map();
  for (let item in arr) {
    if (!map.has(arr[item])) {
      map.set(arr[item])
    }
  }
  return Array.from(map).flat().filter(item => item !== undefined);
}

console.log(withMap(someArr));

function withMap_arrMethod(arr) {
  const map = new Map();

  arr.forEach(function(element) {
    return !map.has(element) ? map.set(element) : null;
  });

  return Array.from(map).flat().filter(item => item !== undefined);
}

console.log(withMap_arrMethod(numArr));

function withEsFive(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) uniqueArr.push(arr[i])
  }

  return uniqueArr;
}

// console.log(withEsFive(someArr));