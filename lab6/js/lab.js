/*
 *  Author: Mikayla Roberts <misrober@ucsc.edu>
 *  Created: 20 October 2021
 *  License: Public Domain
 */

// Declare an array myTransport that lists all of the forms of transportation you use to get around.
var myTransport = ["car", "bus", "bike"];

// Declare an object myMainRide that collects all the data you specified for your primary vehicle in Lab 5.
var myMainRide = {};
myMainRide.make = "Chevrolet";
myMainRide.model = "Cruze";
myMainRide.color = "black";
myMainRide.year = 2018;

// Use document.writeln() to neatly output myTransport
document.writeln("Getting around: " + myTransport + "<br>");

// Print out myMainRide
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
