const mat1 = [1,2,1,1,1,1,1,1,6,6,6,6,6,7,7,7,7,7,9,9,9,9];
// with sets
var longestline = function(mat) {
  // so we want to check for 1's again
  // this time we want to find the longest consecutive sequence of 1's in any direction
  let maxSequence = 0;
  let set = new Set(mat);

  let currentNum;
  let currentSequence;
  console.log(currentSequence);
  mat.forEach(num => {
    // num is each set in the matrix
    if (!set.has(num - 1)) {
      console.log(!set.has(num - 1));
      currentNum = num;
      currentSequence = 1;

      while (set.has(currentNum+1)) {
        console.log(set.has(currentNum + 1));
        currentNum+= 1;
        currentSequence+= 1;
      }
      maxSequence = Math.max(maxSequence, currentSequence);
    }
  });
  return maxSequence;
};

// console.log(longestline(mat))

// for loops
var longestLine = function (mat) {
  let dict = {};
  
  mat.forEach(item => {
    dict[item] = 1; // Assign properties to dict
  });
  
  let result = 0; // result starts at 0 for the sequence

  for (let i = 0; i < mat.length; i++) {
    let seq = 0;
    let temp = mat[i] // accessing nested sets

    if (dict[temp]) { // asign temp to dict
      while(dict[temp]) { // while dict has temp values
        seq = seq + Number(dict[temp]); // set the sequence
        if (dict[temp] > 1) break;
        temp--;
      }
    }
    dict[mat[i]] = seq;
    result = Math.max(result, seq) // re-assign result
  }
  console.log(dict);
  return result;
};

// console.log(longestLine(mat));

var longestConsec = function (mat) {
  const set = new Set(mat);
  let result = 0;

  for (let num of mat) {
    if (!set.has(num - 1)) {
      let l = 0; // our length
      while(set.has(num++)) ++l;
      result = Math.max(result, l);
    }
  }
  return result;
};

console.log(longestConsec(mat1))