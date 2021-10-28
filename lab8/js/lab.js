/*
 *  Author: Mikayla Roberts <misrober@ucsc.edu>
 *  Created: 27 October 2021
 *  License: Public Domain
 */

// Create an array of numbers and assign it to a variable.
var numArray = [1, 6, 76, 9, 7, 5, 98, 70, 23, 75];
console.log("My array:", numArray);

// Create a named function that will take a single parameter.
function calcSqrt(x) {
    // Calculate the square root.
    var results = Math.sqrt(x);
    // Return the result.
    return results;
}

// Test your function with a few different numbers. Should return 2, 3, 4.
console.log("The square root of 4 is", calcSqrt(4));
console.log("The square root of 9 is", calcSqrt(9));
console.log("The square root of 16 is", calcSqrt(16));

// Use map on your array using your function as a callback to operate on all the numbers in your array.
var results = numArray.map(calcSqrt);
// Should return [1, 2.449489742783178, 8.717797887081348, 3, 2.6457513110645907, 2.23606797749979, 9.899494936611665, 8.366600265340756, 4.795831523312719, 8.660254037844387]
console.log("Square roots of numbers in array:", results);

// Use a new anonymous function as a callback with map to square each of the numbers in your array.
var results = numArray.map(function(x) {
    return x * x;
});
// Should return [1, 36, 5776, 81, 49, 25, 9604, 4900, 529, 5625]
console.log("Array elements squared:", results);
