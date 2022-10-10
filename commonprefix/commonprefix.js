const strs = ["flower", "flow", "flight"];
const strs2 = ["dog", "racecar", "car"];
const strs3 = ["ab", "a"];
const strs4 = ["abracadabra", "abracadabra"];

var longestCommonPrefix_test1 = function (strs) {
  // default return value if there are no common prefixes
  // we set this value if there are common prefixes
  let result = "";
  let prefixes = [];
  // we may need to collect the prefixes for comparison
  // we need to iterate through the array and collect our prefix's
  // string methods would be useful for this
  for (let str of strs) {
    // have to account for length
    if (str.length >= 3) {
      prefixes.push([str.charAt(0), str.charAt(1)].join(''));
    }
    if (str.length <= 2) {
      prefixes.push([str.charAt(0)].join(''));
    }
  }

  // console.log(prefixes.every(element => element === [strs[0].charAt(0), strs[0].charAt(1)].join('')));

  // once we have our prefixes collected we check if any are the same, if not return empty str  
  if (prefixes.length) {
    if (prefixes[0].length > 1) {
      if (prefixes.every(element => element === [strs[0].charAt(0), strs[0].charAt(1)].join(''))) {
        result = prefixes[0];
      }
    }

    if (prefixes.every(element => element === [strs[0].charAt(0)].join(''))) {
      result = prefixes[0];
    }
  }

  console.log(prefixes);

  return result;
};
/**
 *  Prefix definition
 *  an affix attached to the beginning of a word, base,
 *  or phrase and serving to produce a derivative word 
 *  or an inflectional form — compare suffix. 2 : a title used before a person's name. prefix.
 */
// console.log(longestCommonPrefix(strs3));
// max strs.length is 200
// max str[i] length is 200
// HORIZONTAL SCANNING O(S);
var longestCommonPrefix_test2 = function (strs) {
  // default return value if there are no common prefixes
  // we set this value if there are common prefixes
  if (strs.length === 0) return "";
  // need to a way to iterate through the str of strs and
  // run comparisons on individual character to check for equality
  // within a given range - define a prefix range?
  // some prefixes can be as long as the word itself i.e. abracadabra
  // a prefix always has to produce something and is always at the beginning

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // we need some constraints here
    while (strs[i].indexOf(prefix) != 0) {
      // always start from the beginning to find pre's
      prefix = strs[i].substring(0, prefix.length - 1);
      if (!prefix.length) return "";
    }

  }

  return prefix;
};

// console.log(longestCommonPrefix(strs));

const convoluted = (strs) => {
  // we set the min to Infinity because we're so cool
  let minimum = Infinity;

  let result = "";
  // forEach does not return a new array
  // iterate through the array and find the min length
  // we're putting constraints on the prefix
  strs.forEach(function(x) {
    minimum = Math.min(minimum, x.length);
  });
  // console.log(minimum);

  // now that we've found our shortest word
  // filter to narrow down the results
  let minword = strs.filter(str => str.length === minimum);
  let str = minword[0];

  // modify the array in place
  // we replace 1 element at the index where our minword is in the array
  strs.splice(strs.indexOf(str), 1);

  // now we loop because algo is all about loops for some reason
  // loop de loop
  for (let i = 0; i < str.length; i++) {
    let k = 0;
    for (let j = 0; j < strs.length; j++) {
      if (str[i] === strs[j][i]) {
        k++
      };
    }
    if (k === strs.length) result += str[i]; // build the result str
  }
  // find the minimum
  return result;
}

// console.log(convoluted(strs3));

const longestCommonPrefix = (strings) => {
  let longest = 0;


  strings = strings.sort(function(a, b) {
    // comparator
    a.length - b.length;
  });

  while (longest < strings[0].length) {

    let common = strings[0][longest];

    for(let substr of strings) {
      if (substr[longest] !== common) {
        return substr.substring(0, longest);
      }
    }

    longest += 1;
  }

  return strings[0];
};

console.log(longestCommonPrefix(strs));