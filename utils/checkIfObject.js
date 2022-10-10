// checking if an object has all but one truthy property
// want to abort whatever comes next if this condition is true

// If one of these properties changes to a truthy value we want to run a request
// sortDirection is always truthy
// We want to check for truthy values and search accordingly
let someObj = {
  brandId: undefined,
  clientId: 257,
  countryId: undefined,
  page: undefined,
  productId: undefined,
  sortDirection: 'asc',
}


const keys = Object.keys(someObj);
const values = Object.values(someObj);
const entries = Object.entries(someObj);

console.log(keys);
console.log(values);
console.log(entries);

const foundTruthyVal = values.find(val => val !== undefined);

if (foundTruthyVal === 'asc') {
  console.log('dont run the request based on object values');
}

const foundTruthyVal2 = entries.filter(item => item[1] !== undefined)

if (foundTruthyVal2[0][1] === 'asc') {
  console.log('don\'t run the request');
}

// console.log(values.find(val => val !== undefined));

// console.log(someObj)