// find a combination of numbers i, j, and k;
// i will never be j and j will never be k and i will never be k;
// the sum of i,j, and k will always be 0;
// returning a tuple where each member (that satisfies the conditions) is a set of 3;
// if there are no elements in nums that satisfy these conditions return 0;
// since we're dealing with iterating thrice, I assume the time complexity here is O(n3) cubic.
const threeSum = (nums) => {
  const map = new Map();
  // target is always 0;
  // i + j + k = 0;
  // 0 - i = j + k
  // 0 - j = i + k
  // 0 - k = j + i;
  const result = new Set();
  const target = 0;
  // C U B I C
  for (let i = 0; i < nums.length; i++) { // lexical scoping
    for (let j = 1; j < nums.length; j++) {
      for (let k = 2; k < nums.length; k++) {
        if ((nums[i] + nums[j] + nums[k]) === target) {
          console.log(nums[i] + nums[j] + nums[k]);
          if (nums[i] !== nums[j] && nums[j] !== nums[k]) {
            result.add([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
  }

  return result;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4].sort()));

// Non-retarded solution
const three_sum = (nums) => {
  // we need to find the three little piggies that are all unique and different
  const sorted = nums.sort((a, b) => a - b);
  // hi low get the bones out roll 'em
  const low = i + 1; // beginning of the array
  const high = nums.length - 1; // end of the array
  const result = [];
  
  for(let i = 1; i < sorted.length; i++) {
    if (low + sorted[i] !== 0) return; // Remaining values will not be zero
    if (low + sorted[i] === 0) {
      result.push(sorted[i]);
    }
  }
};