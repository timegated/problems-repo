// write a function that takes in two strings as input and returns the number
// of matching letters when the match and input strings are compared
// match string
// input string

/**
 * Ways to Optimize:
 * - Explore a recursive solution that leverages memoization
 * - Reduce the number of iterations for really long words by storing results in a separate ds (Map or Set)
 * and perform a comparison of some kind (Maps and Sets have faster access methods);
 * 
 * The complexity is O(n2) worst case exponential since we are iterating twice.
 * 
 * For safety/testing
 * - Include error checking that validates input
 * - Strings must always be compared to strings here
 */
function checkMatch(matchStr, inputStr) {
  let result = 0;
  let i = 0;
  // options here are foreach/for of/for i
  console.time();
  for (let str of matchStr) {
    for (let inpStr of inputStr) {
      // 3 x 2
      if (str === inpStr) result += 1;
      i += 1;
    }
  }
  console.timeEnd();

  return {
    matchWord: matchStr,
    inputWord: inputStr,
    matchCount: result,
    iterations: i,
  }
};

console.group('RESULTS for checkMatch');
console.log(checkMatch('onomatapoea', 'mat'));
console.log(checkMatch('turd', 'cam'));
console.log(checkMatch('logic', 'ogic'));
console.log(checkMatch('tulameuniversity', 'lame'));
console.log(checkMatch('blame', 'shame'));
console.groupEnd();

/**
 * We use a set here and push the letters of the input string into it.
 * We then use the .has method to check if any of the members of the matchStr exist inside the set and
 * increment accordingly.
 * Doing it this way has O(n) complexity, linear, worst case. since we loop once through each string.
 * We reduce our total iterations here by half for each set of words compared to regular checkMatch.
 */
function checkMatchOptimized(mStr, inpStr) {
  const matchSet = new Set();
  let i = 0;
  let inpIt = 0;
  let matchIt = 0;

  console.time();
  Array.from(inpStr).forEach(inpLetter => {
    matchSet.add(inpLetter);
    inpIt += 1;
  });

  Array.from(mStr).forEach((letter) => {
    if (matchSet.has(letter)) {
      i += 1;
    }
    matchIt += 1;
  });
  console.timeEnd();

  return {
    matchWord: mStr,
    inputWord: inpStr,
    count: i,
    totalIterations: inpIt + matchIt,
  };
};

console.group('RESULTS for checkMatchOptimized');
console.log(checkMatchOptimized('onomatapoea', 'mat'));
console.log(checkMatchOptimized('turd', 'cam'));
console.log(checkMatchOptimized('logic', 'ogic'));
console.log(checkMatchOptimized('tulameuniversity', 'lame'));
console.log(checkMatchOptimized('blame', 'shame'));
console.groupEnd();