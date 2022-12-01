 /**
  * DESCRIPTION:
  * 
  * Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns 
  * true if the block (/function) returns true for none of the items in the array. An empty list should return true.
  * 
  * Explanation:
  * 
  * Returns a boolean if the function returns true
  * @param {[]} arr 
  * @param {function} fun 
  * @returns boolean
  */

 // My Solution

 const none = (arr, fun) => {  
    for ( let item of arr )  { // loop through `arr` to see if it has any items
      if ( fun(item) ) {      // check `fun` for `item` - if `fun` has `item`, return false.
        return false;
      }
   }
  return true; // outside if for loop fails
  }

 // Best Practice Solution (Recommended)

  const none = (arr, fun) => !arr.some(fun)

 // Clever Solution
 
  const none = (arr, fun) => arr.filter(fun).length === 0;

  // Keep Coding....