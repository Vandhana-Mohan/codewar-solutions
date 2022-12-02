/**
 * DESCRIPTION: 
 * Summation : Write a program that finds the summation of every number from 1 to num. 
 * The number will always be a positive integer greater than 0.
 * 
 * For example: 
 * summation(2) -> 3 
 * 1 + 2 
 * summation(8) -> 36 
 * 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
 * 
 * * Returns a number representing the total of n numbers.
 * @param {number} num - last number.
 * @returns {number} Returns the total from 1 to num
 */

 // My Solution

 var summation = function (num) {
    return (num * (num + 1)) / 2 // arithmetic series formula (a * (a + 1)) / 2
  }

  // Best Practice Solution (Recommended)

  var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
  }
  
  // Clever Solution

  const summation = num => num * (num + 1) / 2;