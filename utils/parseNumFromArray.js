// for an api request any numbers present in the query params are represented as strings
// for these numbers to be used to reference items from a db they need to be converted to numbers
// the result is appended to a query param

const parseNumFromArray = (...args) => {
  console.time('parseNumFromArray');
  const parsedNums = [];
  args[0].split(',').forEach(str => parsedNums.push(parseInt(str, 10)));
  console.timeEnd('parseNumFromArray');
  return parsedNums.join(',');
};

console.log(parseNumFromArray('1,2,3,4,5'));


const parseNum = (input) => {
  console.time('parseNum');
  return input.split(',').map(str => {
    console.timeEnd('parseNum');
    return parseInt(str,10);
  }).join(',');
};

console.log(parseNum('1,2,3,4,5'));

const parseNum2 = (input) => {
  console.time('parseNum2');
  const result = [];
  const inputArray = input.split(',');
  for(let i = 0; i < inputArray.length; i++) {
    result.push(parseInt(inputArray[i], 10));
  }
  console.timeEnd('parseNum2');
  return result.join(',');
}

console.log(parseNum2('1,2,3,4,5'));

console.log(!isNaN(4));