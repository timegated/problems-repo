const inc = (() => {
  let i = 0;
  return function () {
     return i++
  }
})();

console.log(inc());
console.log(inc());
console.log(inc());
