// find the lexicographically smallest string with swaps

// we can use charCodeAt to establish the numerical positions of the strings

// given a sting s and an array of pairs of indices in the string pairs
// where pairs[i] = [a, b] indicates 2 indices (0 based) of the string
// pairs can be swapped any number of times
// return lexi-smallest after the swaps (fancy way of saying which position each letter is on the alphabet)

// being with DFS

const tree = {
  id: 0,
  value: 'someval',
  children: [
    {
      id: 1,
      value: 'someval2',
      children: [
        {
          id: 2,
          value: 'someval3',
          children: [],
        },
        {
          id: 3,
          value: 'someval4',
          children: [],
        },
        {
          id: 4,
          value: 'someval5',
          children: [],
        }
      ] // children of 1
    }
  ] // child of 0
};

function dfs(start, target) {
  console.log({ start, target });
  console.log('visiting node:', start.value);
  if (start.value === target) {
    console.log('FOUND');
    return start;
  }

  for (let i = 0; i < start.children.length; i++) {
    let result = dfs(start.children[i], target);
    if (result !== null) {
      return result;
    }
  }

  return null;
}

console.log(dfs(tree, 'someval4'));