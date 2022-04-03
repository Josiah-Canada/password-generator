//var upperCase = "ABCD"
// var loweCase =
// var specialChar =
// var numbers =

// // Assignment Code
var blandText = ""
var text = ""
var generateBtn = document.querySelector("#generate");
    
    var charAmount =  window.prompt("How many characters do you want your passwrod");
        if (charAmount > 8 || charAmount < 128) {
        alert("creating " + charAmount + " character password; One more thing.")
        } else {
          alert("Please select a valid reponse")
        }
      
      console.log(charAmount);
        
      var charCase = window.prompt("Do you wish to include uppercase letter and special characters?");
        if (charCase === "yes") {
          coolPassword();
        } else if (charCase === "no") {
          boringPassword();
        } 
        
      function coolPassword() {
        //var text = ""
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*?";
  
        for (var i = 0; i < charAmount; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        console.log(text);  
  }
        
        
        function boringPassword() {
          //var blandText = ""
          var available = "abcdefghijklmnopqrstuvwxyz";

          for (var i = 0; i < charAmount; i++) {
            blandText += available.charAt(Math.floor(Math.random() * available.length));
          }
          console.log(blandText);
        }






// Write password to the #password input
// (function () {
//   var old = console.log;
//   var logger = document.getElementById('password');
//   console.log = function (message) {
//     if (typeof message == 'object') {
//         logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
//     } else {
//         logger.innerHTML += message + '<br />';
//     }
// }
// })();

// Add event listener to generate button
//generateBtn.addEventListener("click", );
