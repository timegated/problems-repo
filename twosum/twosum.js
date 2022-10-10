// Given an array of numbers find the two indices that add up to the target

// find two numbers here that add up to the target.
// we can do this iteratively or recursively.
const numArr = [2, 7, 11, 15];
const numArr2 = [3, 4, 2];
const target = 9;
const target2 = 6;
const target3 = 7

const numArr3 = [-1,-2,-3,-4,-5]
const target4 = -8;
// iterative solution
// add the numbers on each iteration and check if the result equals the target
// push the indices of the first and second numbers that add up to the target
function twosum(arr, targ) {
  let res = new Set();
  for (let i = 0; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      console.log(arr[i] + arr[j]);
      if (arr[i] + arr[j] === targ) {
        res.add(i);
        res.add(j);
      }
    }
  };

  return !Array.from(res).length ? null : Array.from(res);
};


// console.log(twosum(numArr, target));
// console.log(twosum(numArr2, target2));
// console.log(twosum(numArr2, target3));
// console.log(twosum(numArr2, target));
// console.log(twosum(numArr3, target4));

// with array methods ATTEMPT
function twosumforeach(arr, targ) {
  let res;
  arr.reduce((accum, current, index, array) => {
    console.log(accum + current);
    if (accum + current === targ) return res = [array.indexOf(accum), array.indexOf(current)];

    return accum + current;
  }, 0);
  return res;
};

// console.log(twosumforeach(numArr, target));
console.log(twosumforeach(numArr2, target2));

// actual solution
// Need to remember where our numbers are
// Constraints: curr + x = target;
function twoSum(arr, targ) {
  // Can use the map datastructure to keep track of our potential values;
  const map = new Map();
  for (let num in arr) {
    let current = num;
    let x = targ - current;

    console.log(`x: ${x}, current: ${current}`)

    if (map.has(x)) {
      // return [map.get(x), arr[num]];
      console.log(map.get(x), arr[num]);
    }

    map.set(current, arr[num]);
  }
  return map;
};

// Regular for loop
function twoSum2(arr, targ) {
  // Can use the map datastructure to keep track of our potential values;
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    // Current value in the array
    let current = arr[i];
    // Constraints on the target
    let x = targ - current;

    console.log(`x: ${x}, current: ${current}`)

    if (map.has(x)) {
      return [map.get(x), i];
    }

    map.set(current, i);
  }
  return null;
};

// console.log(twoSum2(numArr2, target2));

// with array methods
var twoSumTendies = function (nums, target) {
  const map = new Map();
  return nums.map((num, index) => {
    // we have each entry and the index
    console.log(num, index);
    // logic is num + x = target so x is target - num
    let x = target - num;
    // if the map has the target already we grab the index from the map and the index of the current number
    if (map.has(x)) return [map.get(x), index];
    // storing where we are as we iterate through the array.
    map.set(num, index);
  }).filter(item => item !== undefined).flat();
};

// console.log(twoSumTendies(numArr2, target2));