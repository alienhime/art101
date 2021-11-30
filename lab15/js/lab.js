/*
 *  Author: Mikayla Roberts <misrober@ucsc.edu>
 *  Created: 29 November 2021
 *  License: Public Domain
 */

 var myUrl = "https://cataas.com/cat?json=true";

 $("#activate").click(callAjax);

 function callAjax() {
   // Using the core $.ajax() method
   $.ajax({
       // API endpoint
       url: myUrl,
       // POST or GET request
       type: "GET",
       // data type we expect back
       dataType : "json",
   })
   // If the request succeeds
   // data is passed back
   .done(function(data) {
       console.log("Success:", data);
       var imgUrl = "https://cataas.com" + data.url;
       var imgTag = "<img src=" + imgUrl + ">";
       $("#output").html(imgTag);
   })
   // If the request fails
   .fail(function(request,error) {
       console.log(request, error);
   });
 }
