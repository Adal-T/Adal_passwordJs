// Assignment Code
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var Lowercase = "abcdefghijklmnopqrstuvwxyz"
var Numbers = "0123456789"
var SpecialCharacters = "!@#$%^&*()_+"
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var passwordLength = prompt("How many characters would you like your password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
  var wantsUppercase = confirm("Do you want uppercase characters?")
  var wantsLowercase = confirm("Do you want lowercase characters?")
  var wantsNumbers = confirm("Do you want numbers?")
  var wantsSpecialCharacters = confirm("Do you want special characters?")
  if (wantsUppercase === false && wantsLowercase === false && wantsNumbers === false && wantsSpecialCharacters === false) {
    alert("You must choose at least one character type");
    return;
  }
  var options = "";
  if (wantsUppercase === true){
    options += Uppercase
  }
  if (wantsLowercase === true){
    options += Lowercase
  }
  if (wantsNumbers === true){
    options += Numbers
  }
  if (wantsSpecialCharacters === true){
    options += SpecialCharacters
  }
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = options[Math.floor(Math.random() * options.length)]
    password += randomChar;
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
