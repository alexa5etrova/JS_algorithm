// Steamroller
// Flatten a nested array. You must account 
// for varying levels of nesting.
function steamrollArray(arr) {
  let newArr = [];
  let flatten = function(arg){
    if (Array.isArray(arg) === false){
      newArr.push(arg);
    } else {
      for (let a in arg){
        flatten (arg[a]);
    }
    }
  }
  arr.forEach(flatten);
  return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));