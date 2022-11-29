function one(x, y) {
  return x * y;
}


function two(oneRes) {
  return oneRes * 10;
}

function three(twoRes) {
  return twoRes * 100;
}


function oneString(str) {
  return str.toUpperCase();
}

function twoString(result) {
  const firstLetter = result.substring(0, 1);
  return result.trim().replace(firstLetter, "@");
}

function thirdString(result) {
  return result.substring(0, result.length).toLowerCase();
}

console.log(three(two(one(10, 10))));
console.log(thirdString(twoString(oneString('somestring'))));

console.log(one(two(10), three(10)));
console.log(oneString(twoString(thirdString('somestring'))));