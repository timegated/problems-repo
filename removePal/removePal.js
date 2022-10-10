// remove palindromic sequences until string is empty
// given string s consisting of letters "ab" a single step is needed to get ""

var removePalindromeFromSub = function (s) {
  if (!s.length) return 0;

  if (s === reverseStr(s)) return 1;

  return 2;
};


function reverseStr (str) {
  const reversed = [];
  console.time();
  for (let i = str.length; i >= 0; i--) {
    reversed.push(str[i]);
  }
  console.timeEnd();
  return reversed.join('');
};

console.log(removePalindromeFromSub('ababa'));
// console.log(reverseStr('long'));