// https://leetcode.com/problems/calculator-with-method-chaining/description/

class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.res = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.res = this.res + value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.res = this.res - value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.res = this.res * value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (!value) {
      throw new Error("Division by zero is not allowed");
    }
    this.res = this.res / value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.res = this.res ** value;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.res;
  }
}
