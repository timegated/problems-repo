/**
 * :D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad
 */

// [ 'T_T', ':D', ':|', ':)', ':(' ]

function sortEmotions(order = 'asc',) {
  const emotionMap = new Map([[0 ,':D'], [1, ':)'], [2 ,':|'], [3, ':('], [4, 'T_T']]);
  const mapVals = Array.from(emotionMap.keys()).sort((a,b) => order === 'asc' ? a-b : b - a);
  return mapVals.map((val) => {
    console.log(val);
    return emotionMap.get(val);
  });
}

console.log(sortEmotions('desc'));