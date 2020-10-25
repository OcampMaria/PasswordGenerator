

//Used functions to generate random character types: lowercase, uppercase, numeric, and special characters

//the *26 means that there is a total of 26 letters in teh alphabet (This would be the limit of how many times I want to randomize). the +97 is the number where the lowercase letters start in the Browser Character Set. 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

//Randomized uppercase letters. There are 26 uppercase letters. The uppercase letters start at the 65 number on the Browser Character Set. 
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

//Randomized numbers. There are 10 numbers. The numbers start at 48 on the Browser Character Set. 
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

//Randomized special characters. created a variable with string and used it to get random symbols. 
function getRandomSymbol() {
 var symbols = "!@#$%^&*.";
 return symbols[Math.floor(Math.random() *symbols.length)];
}

console.log(getRandomSymbol());


var specialChar = "!@#$%^&*".split("");
  var numeric = "1234567890".split("")
  var loweCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//generator functions******
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria