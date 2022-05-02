const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!date) {
    return 'Unable to determine the time of year!'
  };

  if (!(date instanceof Date) || date.toString !== Date.prototype.toString) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth() + 1;
  const winter = [12, 1, 2];
  const spring = [3, 4, 5];
  const summer = [6, 7, 8];
  const fall = [9, 10, 11];
  if (winter.includes(month)) {
    return "winter";
  } else if (spring.includes(month)) {
    return "spring";
  } else if (summer.includes(month)) {
    return "summer";
  } else {
    return "fall";
  }
}

module.exports = {
  getSeason
};