const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  if (str.length > 0) {
    let count = 1;
    let value = str[0];

    for (let i = 1; i < str.length; ++i) {
      let char = str[i];
        if (char == value) {
          count++;
        } else {
          if (count > 1) {result.push(count, value)} else {
            result.push(value)
          }
          count = 1;
          value = char;
        }
      }
      if (count > 1) {result.push(count, value)} else {
        result.push(value)
      }
  }
  console.log(result.join(''));
  return result.join('');
}

module.exports = {
  encodeLine
};