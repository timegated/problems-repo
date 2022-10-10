// find the submatrices that all contain 1's
const mat1 = [[1,0,1],[1,1,0],[1,1,0]]; // Expected output 13;
const mat2 = [[0,1,1,0],[0,1,1,1],[1,1,1,0]]; // Expected output 24;

var numSubmat = function(m) {
  // grab our rows
  let rows = m.length;
  // grab our columns
  let cols = m[0].length;
  // push to the count
  let count = [];
  // result to be returned
  let result = 0;
  // we always start with rows -> columns
  for (let i = 0; i < rows; i++) {
    let c = 0;
    let tempRow = [];
    for (let j = cols - 1; j >= 0; j--) {
      if (m[i][j] === 1) {
        // if any of the elements are 1 we increase the count
        c++;
      } else {
        // 0 is 0
        c = 0;
      }
      tempRow.unshift(c);
    }
    count.push(tempRow);
  }
  // The general pattern here for matrix multiplication
  // 3 Nested loops with O(n^3) worst case complexity
  // Cubic Algorithm
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let min = Number.MAX_SAFE_INTEGER
      for(let k = i; k < rows; k++) {
        min = Math.min(min, count[k][j]);
        result = result + min;
      }
    }
  }

  return result;
}

console.log(numSubmat(mat2));