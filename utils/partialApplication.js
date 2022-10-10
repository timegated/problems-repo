// Currying/Partial application (same thing);

let sum = (x, y) => x + y;

let succ = sum.bind(null, 1); // bind first arg to 1 (x)

succ(2); // this is called as the second argument (y)

console.log(succ(2)); // output 3

console.log(sum.bind(null, 1));