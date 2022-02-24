module.exports = function reverse (n) {

  let numArr = Math.abs(n).toString().split('');
  let revNum = '';
  for(let i = 0; i < numArr.length; i++) {
      revNum = numArr[i]+revNum ;
  }
  return revNum;
}
