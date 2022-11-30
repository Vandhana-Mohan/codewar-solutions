/** 
 * DESCRIPTION:
 * 
 * You're writing code to control your town's traffic lights. 
 * You need a function to handle each change from green, to yellow, to red, and then to green again.
 * Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
 
 * For example, when the input is green, output should be yellow.
 
 * Explanation:
 * 
 * Returns a string representing the current state of the traffic light.
 * @param {string} current - current color of the traffic light.
 * @returns {string} Returns the new color of traffic light based on the current color
 */

 // My Solution

 function updateLight(current) { 
    return current === "green" ? "yellow" : current === "yellow" ? "red" : current === "red" ? "green" : "Invalid"
 } 

 // Best Practice Solution (Recommended)

 function updateLight(current) {
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  }

 // Clever Solution

 const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
 })[current]

 // Best Wishes..