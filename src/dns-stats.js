const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */


function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = {};
  const reversed = domains.map(domain => domain.split('.').reverse());
  for (let i = 0; i < reversed.length; i++) {
    const dnsX = reversed[i]; 

    for (let dnsI = 0; dnsI < dnsX.length; dnsI++) {
      const name = '.' + [...dnsX].splice(0, dnsI + 1).join(".");
      result[name] = (result[name] || 0) + 1;
    }
  }
  console.log(result);
  return result;
}

module.exports = {
  getDNSStats
};

getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])