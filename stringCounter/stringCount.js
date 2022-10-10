const str = 'somestring';


// Linear time complexity O(n)
const countString = (str) => {
  const letterArr = [];
  let count = 0;
  for(let letter of str) {
    console.log(letter);
    count += 1;
    letterArr.push(letter);
  }
  return {
    count: count,
    letterArr: letterArr,
  };
};

console.log(countString(str));
console.log(str.length);