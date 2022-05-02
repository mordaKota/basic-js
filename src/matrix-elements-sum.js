const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = 0;
  let transpose = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  for(let i = 0; i < transpose.length; i++) {
    for (let j = 0; j < transpose[i].length; j++) {
      if(transpose[i][j - 1] !== 0) {
        result += transpose[i][j];
      }
    }
  }
  console.log(result);
  return result;
}

module.exports = {
  getMatrixElementsSum
};