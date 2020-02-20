module.exports = function reverse (n) {
  let strNum = '';
   n = Math.abs(n); 
    while (n/10>0){
        strNum += n%10;
        n=Math.floor(n/10);
    }
    return parseInt(strNum);
}
