module.exports = function reverse (n) {
  n = Math.abs(n);
  let numArr = n.toString().split('');
  let revNum = '';
  for(let i = 0; i < numArr.length; i++) {
      revNum = numArr[i]+revNum ;
  }
  return revNum;
}
