/*
 *  Author: Mikayla Roberts <misrober@ucsc.edu>
 *  Created: 14 November 2021
 *  License: Public Domain
 */

// sorts user into different houses depending on the length of their name
function sortingHat(str) {
  var name = str;
  console.log("Your name: " + name);
  // count the letters in str and assign it to a variable length
  var length = name.length;
  console.log("Length = " + length);
  // use modulus (% operator) to get the remainder with 4
  var mod = length % 4;
  // create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
  if (mod == 0) {
    return "Gryffindor";
  }
  else if (mod == 1) {
    return "Ravenclaw";
  }
  else if (mod == 2) {
    return "Slytherin";
  }
  else if (mod == 3) {
    return "Hufflepuff";
  }
}

// Create an click listener attached to #button
$("button#button").click(function() {
  // check to make sure button works
  console.log("You clicked me!");
  // that gets the value of #input and assigns it to a variable name
  var name = $("#input").val();
  console.log("Input: " + name);
  // runs sortingHat(name) and stores the result in a variable house
  var house = sortingHat(name);
  // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
  $("#output").append("The Sorting Hat has sorted you into " + house + "<br></br>");
});
