/*Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 in a string to their corresponding HTML entities.*/
'use strict'
function convertHTML(str) {
    let testArray = str.split ("");
    for (let i = 0; i <testArray.length; i ++){
     switch(testArray[i]){
       case "&": 
        testArray[i] = "&amp;";
        break;
       case "<":
        testArray[i] = "&lt;";
        break;
       case ">":
        testArray[i] = "&gt;";
        break;
       case "'":
        testArray[i] = "&apos;";
        break;
       case "\"" :
        testArray[i] = "&quot;";
        break;
     }
    }
   testArray = testArray.join("");
   return testArray;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML("Sixty > twelve"));
  console.log(convertHTML('Stuff in "quotation marks"'));
  console.log(convertHTML("Schindler's List"));
  console.log(convertHTML("<>"));
  console.log(convertHTML("abc"));
  
  
  
  
  
