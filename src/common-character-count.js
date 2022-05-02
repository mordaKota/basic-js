const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let s1Obj = {};
  let s2Obj = {};
  let result = 0;

  const convertToObject = function (str, strObj) {
    const uniqueChars = [...(new Set(str))];
    uniqueChars.forEach(char => {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        if (char === str[i]) {
          count++;
        }
      }
      strObj[char] = count;
    });
    console.log(strObj)
    return strObj;
  }

  convertToObject(s1, s1Obj);
  convertToObject(s2, s2Obj);
  console.log({s1Obj, s2Obj})

  for (let prop in s1Obj) {
    if (s1Obj.hasOwnProperty(prop) && s2Obj.hasOwnProperty(prop)) {
      result = result + Math.min(s1Obj[prop], s2Obj[prop]);
    }
  }
  console.log(result);
  return result;
}

module.exports = {
  getCommonCharacterCount
};