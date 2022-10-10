// take a simple sorting algorithm and modify it to remove duplicates before/after sorting is finished

const uniqueSort = (arr) => {
  const cache = {};
  const removeDups = [];
  console.time();
  for(let item of arr) {
    if (!cache[item]) {
      console.log('item exists in the cache already');
      removeDups.push(item);
      cache[item] = true;
    }
  }
  console.timeEnd();

  console.log(cache);
  return removeDups.sort((a, b) => b - a);
};


console.log(uniqueSort([1, 2, 3, 3, 3, 4, 5, 6, 6, 7, 7]));

// Objects are dynamic in JS

const obj = {};

obj['something'] = true;

console.log(obj);
