// Everything Be True
// Check if the predicate (second argument) is truthy on all elements 
// of a collection (first argument).



function truthCheck(collection, pre) {
    return collection.every(function(item){
      return item.hasOwnProperty(pre) && Boolean(item[pre])=== true;
    });
  }
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));