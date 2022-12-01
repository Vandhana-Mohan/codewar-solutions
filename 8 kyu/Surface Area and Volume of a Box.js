/**
 * Description:
 * 
 * Write a function that returns the total surface area and volume of a box as an array: [area, volume]
 * 
 * @param {number} width 
 * @param {number} height 
 * @param {number} depth 
 * @returns []
 */

// Solution

const getSize = (width, height, depth) => [2 * (width * depth + width * height + height * depth), width * height * depth]

// Surface Area formula :- 2 * ((l * w) + (l * h) + (w * h))
// volume formula :- (l * w * h)

// Happy Coding..