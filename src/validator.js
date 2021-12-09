export default class Validator {
  static validateUsername(expression) {
    const regex = new RegExp('^[a-zA-Z]+([a-zA-Z]+|([0-9]{0,3})|(-*\\_*))*[a-zA-Z]+$');
    return regex.test(expression);
  }
}
