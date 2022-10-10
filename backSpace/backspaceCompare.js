// give two strings determine if they are equal after a backspace has occured in an empty text editor
// # indicates a backspace has happened

const str1 = 'ab#c';
const str2 = 'ad#c';

var backspaceCompare = function(s, t) {
  return compare(s) === compare(t);
};

const compare = (str) => {
  if (str === null) return;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      if (i > 0) {
        str = str.slice(0, i - 1) + str.slice(i + 1);
        i -= 2;
      } else {
        str = str.slice(1);
        i--;
      }
    }
  }
  console.log(str);
  return str;
}

console.log(backspaceCompare(str1, str2));