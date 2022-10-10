// given a string of numerical digits, find the sum of all the numbers

const sumAll = (str) => {
  return str.split('').reduce(function (acc, curr) {
    console.log({ acc, curr });
    return `${Number(acc) + Number(curr)}`;
  }, 0);
};

console.log(sumAll('123456'));

const sumAllIterative = (str) => {
  // generate an array from the string
  let result = 0;
  const numArr = Array.from(str);

  for(let num of numArr) {
    result += Number(num);
  }

  return result;
};

console.log(sumAllIterative('123456'));

function sumAll_imperative(str) {
  const numArr = [];
  for (let i = 0; i < str.length; i++) {
    numArr.push(str[i]);
  }

  function addEachNum (current, next) {
    return parseInt(current) + parseInt(next);
  }

  return numArr.reduce(function (acc, curr) {
    return addEachNum(acc, curr);
  }, '0')
}

console.log(sumAll_imperative('123456'));