// given an array of nums and integer k
// return the maximum sum
// there exists i < j
// with nums[i] + nums[j] = sum and sum < k

// looking for pairs of numbers

const a = [1, 6, 2, 8, 5];
const k = 12;
const nums = [34, 23, 1, 24, 75, 33, 54, 8], kSum = 60;
const noSum = [10, 20, 30], kSum2 = 15;
const largeArray = [358, 898, 450, 732, 672, 672, 256, 542, 320, 573, 423, 543, 591, 280, 399, 923, 920, 254, 135, 952, 115, 536, 143, 896, 411, 722, 815, 635, 353, 486, 127, 146, 974, 495, 229, 21, 733, 918, 314, 670, 671, 537, 533, 716, 140, 599, 758, 777, 185, 549],
  kSum3 = 1800;

// sum always has to be less than k

// Constraints:
// array is never longer than a hundred
// value of nums[i] between 1 and a 1000
// k is always between 1 and 2000

// Going to try a functional approach here
const twoSumLessThanK = (nums, k) => {
  // We want to find the maximum sum that is less than K
  // we need a way to track our sums in order to find the biggest one within
  // the constraints
  console.log(nums.length);
  nums.sort((a, b) => a - b);
  const maxSum = [];
  for (let i of nums) {
    for (let j = nums.length - 1; j >= 0; j--) {
      let currentSum = i + nums[j];
      if (currentSum < k) {
        maxSum.push(currentSum);
      }
    }
  }
  console.log(maxSum.filter(item => item === 1794));
  return !maxSum.length ? -1 : Math.max(...maxSum);
};

// console.log(twoSumLessThanK(nums, kSum));
// console.log(twoSumLessThanK(noSum, kSum2));
// console.log(twoSumLessThanK(largeArray, kSum3));

// lets try this with binary search
// O(nlogn) time - don't want to increase time
// O(1) Space - we can always increase space

const lessThanK = (arr, kay) => {
  // answer here is negative one if no sum
  arr.sort((a, b) => a - b);
  let answer = -1;
  // most left side of the array
  let left = 0;
  // end of the array
  let right = arr.length - 1; // 0 based
  while (left < right) {
    let sum = arr[left] + arr[right];
    // now we check if sum is less than K
    if (sum < kay) {
      answer = Math.max(answer, sum);
      left++;
    } else {
      right--;
    }
  }
  return answer;
};

// console.log(lessThanK(largeArray, kSum3));
// console.log(lessThanK(noSum, kSum2));
// console.log(lessThanK(nums, kSum));

// reverse this array of string values in place
const str = ['h', 'e', 'l', 'l', 'o'];

const reverseInPlace = (arr) => {
  for(let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
    let el = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = el;
  }
  return arr;
};

console.log(reverseInPlace(str))