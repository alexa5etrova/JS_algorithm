// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple 
// of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. 
// The answer here would be 6.

function smallestCommons(arr) {

    let startArray = arr.sort(function(a,b){
      return a-b;
    });
  
    let numArray = [];
    for (let i = startArray[0]; i <= startArray[1]; i++) {
      numArray.push(i);
      }
  
    let quot = 0;
    let n;
    let count = 1;
  
    do { 
      quot = numArray[0]*count*numArray[1];
      for(n = 2; n <=numArray.length; n++){
        if(quot % numArray[n] !== 0){
          break;
        }
      }
      count++;
    } while(n !== numArray.length)
  
    return quot;
  }
  
  
  console.log(smallestCommons([1,5]));
  console.log(smallestCommons([5, 1]));
  console.log(smallestCommons([23,18]));

