const calcOps = (tr, cf) => {
  const opts = [];
  for (let i = 0; i <= tr; i += cf) {
    console.log(i);
    opts.push(i);
  }
  return opts;
}

// console.log(calcOps(100, 10));

const calcOpsRec = (tr, start, cf, listOptions = []) => {
  if (start === tr) return listOptions;
  listOptions = listOptions.concat(start);
  return calcOpsRec(tr, start + cf, cf, listOptions);
}

console.log(calcOpsRec(100, 0, 10, []));