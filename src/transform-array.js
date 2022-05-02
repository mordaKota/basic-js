const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  const result = [...arr];

  for (let i = 0; i < result.length; i++) {
    switch (result[i]) {
      case '--double-next':
        result[i] = null;
        if (result.length > i) {
          result[i] = result[i + 1];
        }
        break;
      case '--double-prev':
        result[i] = null;
        if (i > 0) {
          result[i] = result[i - 1];
        }
        break;
      case '--discard-prev':
        result[i] = null;  
        if (i > 0) {
          result[i - 1] = null;
        }
        break;
      case '--discard-next':
        result[i] = null;
        if (result.length > i) {
          result[i + 1] = null;
        }
        break;
      // default:
        // result[i] = result[i];
    }
  }
  return result.filter(i => i === 0 || !!i);  
}

const res = transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);

console.log({ res });

module.exports = {
  transform
};


//   it.optional('advanced sequence interactions work well', () => {
//   const cases = {
//     doubleDiscarded: {
//         input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
//         output: [1, 2, 3, 4, 5]
//     },
//     doubleDoubled: {
//         input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
//         output: [1, 2, 3, 1337, 1337, 1337, 4, 5]
//     },
//     discardDiscarded: {
//         input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],
//         output: [1, 2, 3, 4, 5]
//     },
//     discardDoubled: {
//         input: [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],
//         output: [1, 2, 3, 1337, 4, 5]
//     }
// };