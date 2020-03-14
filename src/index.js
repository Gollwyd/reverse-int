module.exports = function reverse (n) {
  let num = Math.abs(n);
  let strNum = num.toString();
  let arrNum = strNum.split('');
  let newArr = [];
  arrNum.array.forEach(element => {
      newArr.unshift(element);
  });
  let newString = newArr.join('');
  let newNum = +newString;
  return newNum;
}
