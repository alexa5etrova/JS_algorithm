// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

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
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));