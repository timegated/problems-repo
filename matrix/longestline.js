const mat1 = [[0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 1]];

const matrix1 = [
  [1, 2, 1],
  [3, 1, 6],
  [1, 1, 1],
];

const matrix2 = [
  [1, 1, 1],
  [7, 1, 1],
  [1, 1, 8],
];

var longestLine = function (mat) {
  // collect our values
  const map = new Map();
  const m = mat.length;
  const n = mat[0].length;

  const dirs = [[-1, 0], [0, -1], [-1, -1], [-1, 1]];

  let max = 0;

  const setMax = ([i, j]) => {

    map.set(i * n + j, [1, 1, 1, 1]);

    max = Math.max(max, 1);

    console.log(map);

    const crnt = map.get(i * n + j);

    let counter = -1;

    for (const dir of dirs) {
      counter++;
      const ii = i + dir[0];

      const jj = j + dir[1];

      if (ii >= 0 && ii < m && jj >= 0 && jj < n) {
        if (!map.has(ii * n + jj)) continue;

        crnt[counter] += map.get(ii * n + jj)[counter];

        max = Math.max(max, crnt[counter]);

      }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j]) setMax([i, j]);
    }
  }

  return max;
};

// console.log(longestLine(mat1))

// From Skiena
// Product is a new matrix with multiplied values from the previous 3 matrices
// Fundamental problem in linear algebra
// So we need nums and columns

// 3 loops for Matrix Multiplication is O(n^3) worst case;
// This is a cubic algorithm (3)
const matrixMult = (mat1, mat2) => {
  // tight product of three nested loops
  // we define our rows and columns
  const mat1Rows = mat1.length,
    mat1Cols = mat1[0].length, // end first rows/cols
    mat2Rows = mat2.length,
    mat2Cols = mat2[0].length; // end second rows/cols

  const mResult = new Array(mat1Rows); // initialize result container
  for (let i = 0; i < mat1Rows; i++) {
    mResult[i] = new Array(mat2Cols); // init current row
    for (let j = 0; j < mat2Cols; j++) {
      mResult[i][j] = 0 // init current cell
      for(let k = 0; k < mat1Cols; k++) {
        mResult[i][j] += mat1[j][k] * mat2[i][j];
      }
    } // second
  } // first

  return mResult; // result
};

console.log(matrixMult(matrix1, matrix2));