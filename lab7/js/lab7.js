/*
 *  Author: Mikayla Roberts <misrober@ucsc.edu>
 *  Created: 25 October 2021
 *  License: Public Domain
 */

// Create a new function in your file.
function sortUserName() {
  // In the function, declare a variable userName and use window.prompt() to get the user's name from the user.
  var userName = window.prompt("Hello! Please tell me your name so I can fix it for you.");
  console.log("userName = " + userName);

  // Split array so that it's sortable
  var nameArray = userName.split('');
  console.log("nameArray = " + nameArray);
  // Sort array
  var nameArraySorted = nameArray.sort();
  console.log("nameArraySorted = " + nameArraySorted);
  // Put everything back together!
  var nameSorted = nameArraySorted.join('');
  // Return sorted array
  return nameSorted;
}

// Outside of the function, call the function and output the results with document.writeln() to neatly output the user's sorted name.
document.writeln("Fixed that for you!: ", sortUserName(), "</br>");
