"use strict" 
  fearNotLetter("abce");function fearNotLetter(str) {
  let testStr = "abcdefghijklmnopqrstuvwxyz";
  let index = testStr.indexOf(str[0]);
  let count = 0;
  for(let char of str){
    if (char === testStr[(index + count)]){
      count++;
    }else{
      return testStr[index+count];
    }
  }
}

console.log(fearNotLetter("abce"));
