function f(y) {
  return this.x + y;
}

let o = { x: 1};

// bind function invocation to o, will output 3
let g = f.bind(o);

let p = { x: 10, g };


p.g(2);

console.log('the g object', g);
console.log(p.g(2)); // outputs 3 because still bound to o