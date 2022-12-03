 /** 
 * 
 * DESCRIPTION: 
 *
 * Write a function that accepts integer n and string s as parameters, and returns string of s repeated exactly n times.
 * Examples (input -> output) 6, "I"  -> "IIIIII" 5, "Hello" -> "HelloHelloHelloHelloHello"
 * 
 * Returns a string representing the current state of the traffic light.
 * @param {number} n - number of times the string has to repeat
 * @param {string} s - string which has to repeat n times
 * @returns {string} Returns the new repeated string
 */

 // My Solution

 function repeatStr (n, s) {
    return s.repeat(n);
  }
 
 // Clever Solution

 const repeatStr = (n, s) => s.repeat(n)

 // Best Wishes...