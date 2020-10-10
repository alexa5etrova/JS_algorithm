// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method. 
// The methods that take an argument must accept only one argument and 
// it has to be a string. These methods must be the only available means 
// of interacting with the object.


var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullname = firstAndLast;
  
    this.getFullName = function(){
      return fullname;
    };
    
    this.getFirstName = function(){
      return fullname.split(" ")[0];
    };
  
    this.getLastName = function(){
      return fullname.split(" ")[1];
    };
  
    this.setFirstName = function (first){
      fullname = first + " " + fullname.split(" ")[1];
    };
    this.setLastName = function (last){
      fullname = fullname.split(" ")[0] + " " + last;
    };
    this.setFullName = function (firstAndLast){
      fullname = firstAndLast;
    };
   
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.getFullName());
  console.log(bob.getLastName());
  console.log(bob.getFirstName());
  