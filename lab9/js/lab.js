/*
 *  Author: Mikayla Roberts <misrober@ucsc.edu>
 *  Created: 2 November 2021
 *  License: Public Domain
 */

// Use getElementById() to find your output <div> and assign it to a variable outputEl
 var outputEl = document.getElementById("output");
 // Create a new element with document.createElement("p") and assign it to a variable new1El
 var new1El = document.createElement("p");
 // Change the html attribute of new1El to say something new.
 new1El.innerHTML = "I'm a paragraph!";
 // Create another new element and assign it to a variable new2El
 var new2El = document.createElement("p");
// Change the html attribute of new2El to say something else.
new2El.innerHTML = "I'm another paragraph!";
// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
// Change the css attributes of at least two elements of your page
var colorText = document.getElementById("color_test");
colorText.style.color = "red";
var borderDiv = document.getElementById("border_test");
borderDiv.style.border = "10px dotted #00667A";
