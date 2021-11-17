/*
 *  Author: Mikayla Roberts <misrober@ucsc.edu>
 *  Created: 17 November 2021
 *  License: Public Domain
 */

// Create a "FizzBuzz" function similar to how we did in class.
function fizzBuzz() {
  // Initialize string to append text to
  var oneLongStr = "";

  // Loop through numbers 1 to 200, listing them as you go
  for(var i = 1; i <= 200; i++) {
    // If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
      oneLongStr += i + " FizzBuzzBoom!<br>";
    }
    else if (i % 3 == 0 && i % 5 == 0) {
      oneLongStr += i + " FizzBuzz!<br>";
    }
    else if (i % 3 == 0 && i % 7 == 0){
      oneLongStr += i + " FizzBoom!<br>";
    }
    else if (i % 5 == 0 && i % 7 == 0){
      oneLongStr += i + " BuzzBoom!<br>";
    }
    // If the number is a multiple of 3, if should print "Fizz!"
    else if (i % 3 == 0) {
      oneLongStr += i + " Fizz!<br>";
    }
    // If the number is a multiple of 5, it should print "Buzz!"
    else if (i % 5 == 0) {
      oneLongStr += i + " Buzz!<br>";
    }
    // If the number is a multiple of 7, it should print "Boom!"
    else if (i % 7 == 0) {
      oneLongStr += i + " Boom!<br>";
    }
    else {
      oneLongStr += i + "<br>";
    }
  }

  return oneLongStr;
}

// Output function results to output div
$("#output").html(fizzBuzz());
