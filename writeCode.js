// Sum Zero

let arr = [1, 2, 3, -2]

const addToZero = arrOfNums => {
    let result = false;

    for (let i = 0; i < arrOfNums.length; i++) {
        for (let j = 0; j < arrOfNums.length; j++) {
            if (i !== j) {
                if (arrOfNums[i] + arrOfNums[j] === 0) {
                    result = true;
                }
            }
        }
    }
    return result;
}

console.log(addToZero(arr));

// Space complexity is O(n^2)

// Unique Characters

const hasUniqueChars = (str) => {
  const uniqueChars = new Set([]);
  // for loop to go through each letter in the string
  for (let i = 0; i < str.length; i++) {
    // push unique characters to the set
    uniqueChars.add(str[i]);
  }
  // if the set is === to str length, return true
  if (uniqueChars.size === str.length) {
    return true;
  } else {
    return false;
  }
};

console.log(hasUniqueChars("Monday"));

// Space complexity is O(n)

// Pangram Sentence

const isPangram = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const strArr = str.split("");
  // for loop to go through each letter in the alphabet array
  for (let i = 0; i < alphabet.length; i++) {
    // if the alphabet array contains the current letter in the string array,return false
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

// Space complexity is O(n)

// Longest Word

const findLongestWord = (arrOfStr) => {
  let result = "";
  // for loop to go through each string in the array
  for (let i = 0; i < arrOfStr.length; i++) {
    // compare the length of the current string to the length of the result string
    if (result.length < arrOfStr[i].length) {
      result = arrOfStr[i];
    }
  }

  return result.length;
};

console.log(findLongestWord(["hi", "hello"]));

// Space complexity is ???

// outcome of console.log for the above:
// $ node writecode.js
// true
// true
// true
// 5