/*
 *  Author: Mikayla Roberts <misrober@ucsc.edu>
 *  Created: 3 November 2021
 *  License: Public Domain
 */

 // Borrow the nameSort() function from Lab 7.
 function sortUserName(userName) {
   // Split array so that it's sortable
   var nameArray = userName.split('');
   console.log("nameArray = " + nameArray);
   // Sort array
   var nameArraySorted = nameArray.sort();
   console.log("nameArraySorted = " + nameArraySorted);
   // Put everything back together!
   var nameSorted = nameArraySorted.join('');
   // Return the Results
   return nameSorted;
 }

 // Find button element
 var button = document.getElementById("my-button");
 // Attach an event listener to your button
 button.addEventListener('click', function(){
   // Get value of input field
   var userName = document.getElementById("user-name").value;
   console.log(userName);
   // Run that value through sortUserName() function and save the results.
   var results = sortUserName(userName);
   // Replaces the html in <div id=output> with the results.
   var outputDiv = document.getElementById("output");
   outputDiv.innerHTML = results;
 });

 // Make buttons to change elements on the webpage
 var colorButton = document.getElementById("color-button");
 colorButton.addEventListener('click', function(){
   // change paragraph text color to dark blue
   var colorText = document.getElementById("content");
   colorText.style.color = "#3D416E";
 });

 var bgButton = document.getElementById("bg-button");
 bgButton.addEventListener('click', function(){
   // change background color to blue
   var bgColor = document.getElementById("content");
   bgColor.style.backgroundColor = "#7277BA";
 });

 var fontButton = document.getElementById("font-button");
 fontButton.addEventListener('click', function(){
   // change header font to Comic Sans
   var header = document.getElementById("title");
   header.style.fontFamily = "Comic Sans MS";
 });
