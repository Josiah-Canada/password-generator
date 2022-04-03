//var upperCase = "ABCD"
// var loweCase =
// var specialChar =
// var numbers =

// // Assignment Code
    var generateBtn = document.querySelector("#generate");
    var charAmount =  window.prompt("How many characters do you want your passwrod");
        if (charAmount > 8 || charAmount > 128) {
        alert("Please select a valid response")
        } 

        console.log(charAmount);
      var charCase = window.prompt("Do you wish to include lowercase letters, uppercase letter, and special characters?");
        if (charCase != "yes") {
          alert("Please select a valid reponse")
        } else {
          generatePassword();
        }
    
      function generatePassword() {
      var text = ""
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*?";

      for (var i = 0; i < charAmount; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        
      }
    
      console.log(text);
      
      const btn = document.getElementById("btn");
      btn.addEventListener("click", ()=>{
        if(btn.value === "change"){
          btn.value = text 
        }
      })
      

      

      
      

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
