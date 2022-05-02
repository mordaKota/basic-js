const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  chainStr: '',
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      this.chainArr.length < position ||
      typeof position !== 'number' ||
      position < 1
    ) {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chainArr.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    this.chainStr = this.chainArr.join('~~');
    this.chainArr = [];
    return this.chainStr;
  }
};

module.exports = {
  chainMaker
};
