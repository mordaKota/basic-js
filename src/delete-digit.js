const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  const digits = [...(n.toString())];
  let index = digits.length - 1;
  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] > digits[i - 1]) {
      index = i - 1;
    }
  }
  digits.splice(index, 1);
  return parseInt(digits.join(''));
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 
}

module.exports = {
  deleteDigit
};