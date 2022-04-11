var textPassword= document.getElementById("password")
var generateButton = document.getElementById("generate")
var lowerCase = "abcdefghijklmnopqrstuvwxyz" 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericChar = "0123456789"
var specialChar = "~`!@#$%^&*_+=?"
function generatePassword(){
    
    var passwordCharacter = ""
    var password = ""
    var passwordLength = prompt("please enter a valid password")
    passwordLength = parseInt(passwordLength)
    if (passwordLength < 8) {
        alert("please enter a number greater than 8");
        return "";
    } if (passwordLength > 128) {
    alert("please enter a number number no greater than 128");
    return "";
    }
    var lowercaseChoice = confirm("do you want to add lowercase letters?")
    if (lowercaseChoice) {
        passwordCharacter = passwordCharacter + lowerCase
    } 
    var uppercaseChoice = confirm("do you want to add uppercase letters?")
    if (uppercaseChoice) {
        passwordCharacter = passwordCharacter + upperCase
    }
    var numericChoice = confirm("do you want to include numeric characters?")
    if (numericChoice) {
        passwordCharacter = passwordCharacter + numericChar
    } 
    var specialCharChoice = confirm("do you want to include special characters?")
    if(specialCharChoice) {
        passwordCharacter = passwordCharacter + specialChar
    } 
    for (var i = 0; i < passwordLength; i++) {
        var randomPassword = Math.floor(Math.random() * passwordCharacter.length)
        password = password + passwordCharacter.substring(randomPassword, randomPassword + 1)
    }
    textPassword.innerHTML = password
}

generateButton.addEventListener("click", generatePassword)
