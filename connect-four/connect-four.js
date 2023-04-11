const connectFourMatrix = [['-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', 'R', 'R', 'R', 'R'],
['-', '-', '-', 'Y', 'Y', 'R', 'Y'],
['-', '-', '-', 'Y', 'R', 'Y', 'Y'],
['-', '-', 'Y', 'Y', 'R', 'R', 'R']];


function detectWinner(cell) {
  const R = detectR(cell);
  const Y = detectY(cell);
  return {
    r: R,
    y: Y,
  };
}

function loopOver(matrix) {
  const wcr = [];
  const wcy = [];
  for (let m of matrix) {
    for (let j of m) {
      if (j === 'R') {
        wcr.push(detectWinner(j));
        if (wcr.length === 4) {
          break;
        }
      }
      if (j === 'Y') {
        wcy.push(detectWinner(j))
        if (wcy.length === 4) {
          break;
        }
      }
    }
  }
  console.log({wcr, wcy});
  // return wcr.length === 4 ? wcr : wcy;
}

function detectR(r) {
  const rMap = new Map([['R', 'R']]);
  return rMap.get(r);
}

function detectY(y) {
  const yMap = new Map([['Y', 'Y']]);
  return yMap.get(y);
}


console.log(loopOver(connectFourMatrix));