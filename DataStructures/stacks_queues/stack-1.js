function Stack () {
  constructor(entry) {
    this.entry = null;
    this.list = [];
  }

  function clearFirst () {
    this.list.pop(this.entry);
  }

  function insert () {
    this.list.push(this.entry);
  }
};

const stack1 = new Stack();

console.log(stack1);

stack1.insert('cat');
stack1.insert('dog');
stack1.insert('sausage');

console.log(stack1);