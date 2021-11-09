/*
 *  Author: Mikayla Roberts <misrober@ucsc.edu>
 *  Created: 8 November 2021
 *  License: Public Domain
 */

// Add a click event to the button in the "Challenge" section
$("button.challenge").click(function(){
  // check to make sure it works
  console.log("You clicked the challenge button!");

  // find the section the button is in & toggle a class special within the <div> of the section
  $("#challenge_section").toggleClass("special1");
});

// Add a click event to the button in the "Problems" section
$("button.problems").click(function(){
  // check to make sure it works
 console.log("You clicked the problems button!");

 // find the section the button is in & toggle a class special within the <div> of the section
 $("#problems_section").toggleClass("special2");
});

// Add a click event to the button in the "Results" section
$("button.results").click(function(){
  // check to make sure it works
 console.log("You clicked the results button!");

  // find the section the button is in & toggle a class special within the <div> of the section
  $("#results_section").toggleClass("special3");
});
