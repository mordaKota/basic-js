const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options = Object.assign({
    separator: '+',
    additionSeparator: '|',
    additionRepeatTimes: 1,
    repeatTimes: 1,
    addition: '',
  }, options);

  const repeatStr = (str, count, separator) => [...Array(count)].map(() => `${str}`).join(`${separator}`);
  return repeatStr(str + repeatStr(options.addition, options.additionRepeatTimes, options.additionSeparator), options.repeatTimes, options.separator);

}

module.exports = {
  repeater
};
