// Ambigram are words that can flipped and still be spelled the same ex. pod -> pod when rotated


// so we can store known words in a DS and use that to check if the word has a valid rotation
// we're finding palindromes but rotated, if the word is the same forwards as backwards
// except we have to check each letter
// think of finding a palindrome but with rotating instead.
const inputWords = ['pod', 'yeah', 'swims', 'boy', 'hat', 'yes', 'baseball', 'pop'];

const ambiMap = new Map();

// Valid rotations that we already know
// hardcoded
ambiMap.set('p', 'd');
ambiMap.set('o', 'o');
ambiMap.set('d', 'p');
ambiMap.set('y', 'h');
ambiMap.set('e', 'a');
ambiMap.set('a', 'e');
ambiMap.set('h', 'y');
ambiMap.set('s', 's');
ambiMap.set('w', 'm');
ambiMap.set('i', 'i');
ambiMap.set('m', 'w');

// only constraint for this is that you have to know beforehand which letters are valid ambigrams
function checkAmbi(inputList) {
  // if all the values in here are true we know we have an ambigram
  const resArr = [];
  const isAmbigram = [];
  // we do our check in here if the word is an ambigram
  // O(n)
  for (let word of inputList) {
    resArr.push(checkWord(word).join(''));
  }
  // O(n2)
  // compare the words
  for (let resWord of resArr) {
    for (let word of inputList) {
      if (resWord === word) isAmbigram.push(word);
    }
  }

  return isAmbigram;
};

console.log(checkAmbi(inputWords));

// reverse the string do a comparison since I'm bad at math
// use this to check for valid rotations when iterating
// must check all letters, can only be an ambigram if the all the letters can be rotated
function checkWord(word) {
  const result = [];
  for (let i = word.length - 1; i >= 0; i--) {
    // looping backwards to check for palindrome
    console.log(ambiMap.get(word[i]));
    if (ambiMap.has(word[i])) result.push(ambiMap.get(word[i]));
  }
  console.log('checkWord result:', result);
  return result;
};

function createAmbiMap(inputList) {
  const map = new Map();
  let i;
  let j;

  // map.set(inputList[inputList.length - 1]);
  // loop through the initial word list
  for (i = 0; i < inputList.length; i++) {
    for(j = 0; j < inputList[i].length; j++) {
      map.set(inputList[i][j], inputList[i][inputList[i].length - j])
    }
  }
  return map;
};

// console.log(checkWord('pod'));
// console.log(checkWord('yeah'));
// console.log(checkWord('swims'));
// console.log(checkAmbi(inputWords));
// console.log(createAmbiMap(inputWords));



// pod = wejirowejirowjr232342
// dop = wejirowejirowjr232342

// hashmap attempt

const ambiHash = new Map();

ambiHash.set('p', 1);
ambiHash.set('o', 2);
ambiHash.set('d', 3);
ambiHash.set('y', 4);
ambiHash.set('e', 5);
ambiHash.set('a', 6);
ambiHash.set('h', 7);
ambiHash.set('s', 8);
ambiHash.set('w', 9);
ambiHash.set('i', 10);
ambiHash.set('m', 11);
ambiHash.set('s', 12);

function checkAmbiHash(inputList) {
  let result = [];
  // iterate and check hash value, should be the same for the reversed word
  for (let word of inputList) {
    result.push(hashWord(word));
  }
  return result;
};

function hashWord(word) {
  let hash = 0;
  for (let letter of word) {
    hash += hashLetter(letter);
  }
  return hash;
};

// charCodeAt + bitwise math
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char; // Shift the bits
    hash = hash & hash; // convert to 32 bit integer
  }
  return hash;
}

function hashLetter(letter) {
  let hash = 0;
  hash = ((hash << 5) - hash) + letter.charCodeAt(0);
  hash = hash & hash;
  return hash;
};


// console.log(hashWord('ahey'));
// console.log(checkAmbiHash(inputWords));
// console.log(hashCode('pod'));
// console.log('pod'.charCodeAt(0));
// console.log(((0<<5) - 0) + 'pod'.charCodeAt(2));

// console.log(hashLetter('d'));
// console.log(hashWord('dop'));