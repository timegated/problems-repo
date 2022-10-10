// given two linked lists that represent two non-negative integers
// nums are stored in reverse order
// add the numbers and return the sum as a linked list

// Implement a Linked List
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);


}

// Array DS - implicit index/key-value store
function addTwoNums(l1, l2) {
  function reverse(arr) {
    const rev = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      rev.push(arr[i]);
    }
    return rev;
  }

  const sumArrays = Number(reverse(l1).join('')) + Number(reverse(l2).join(''));

  const result = [] 
  for (let item of reverse(Array.from(sumArrays.toString()))) {
    result.push(Number(item));
  }

  return result;
};

console.log(addTwoNums([2, 4, 3], [5, 6, 4]));
console.log(addTwoNums([0], [0]));
console.log(addTwoNums([9, 3, 2, 1, 0, 4], [9, 9, 3, 2, 3, 4]));