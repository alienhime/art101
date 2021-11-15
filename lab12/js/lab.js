/*
 *  Author: Mikayla Roberts <misrober@ucsc.edu>
 *  Created: 14 November 2021
 *  License: Public Domain
 */

// stores descriptions of each house
var gryffindorDesc = '"You might belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve, and chivalry Set Gryffindors apart."';
var ravenclawDesc = '"Or yet in wise old Ravenclaw, If you\'ve a ready mind, Where those of wit and learning, Will always find their kind."';
var slytherinDesc = '"Or perhaps in Slytherin, You\'ll make your real friends, Those cunning folk use any means, To achieve their ends"';
var hufflepuffDesc = '"You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, And unafraid of toil."';

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

  if (house == "Gryffindor") {
    $("#output").append(gryffindorDesc + "<br></br>");
  }
  else if (house == "Ravenclaw") {
    $("#output").append(ravenclawDesc + "<br></br>");
  }
  else if (house == "Slytherin") {
    $("#output").append(slytherinDesc + "<br></br>");
  }
  else {
    $("#output").append(hufflepuffDesc + "<br></br>");
  }
});
