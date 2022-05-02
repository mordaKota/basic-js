const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainStr: '',
  chainArr: [],
  getLength() {
    //thro  w new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chainArr.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (position < 1 || typeof position !== 'number' || this.chainArr.length < position) {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chainArr.splice(position - 1, 1);
    }
    
    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chainStr = с
    this.chainArr = [];
    return this.chainStr;
  }
};

module.exports = {
  chainMaker
};
