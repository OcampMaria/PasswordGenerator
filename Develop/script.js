
//Generate Password click event. 
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generateBtn. Added variables to define different criterias for password.
generateBtn.addEventListener("click", writePassword); {

  //defined length criteria. Prompted person to choose length of password and set criteria of no less than 8 and no more than 128 characters. 
  var length =parseInt(
  prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
  while(length < 8 || length > 128 || typeof(length) != "number" || length === NaN || length === null) {
  alert("Please choose a number that is more than 8 and less than 128 characters");
  length=parseInt(
  prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
} 
//asked whether they want lowecase letters in their password. 
var lower = confirm("Would you like to add lowercase letters to your password?");
//asked whether they want uppercase letters in their password. 
var upper = confirm("would you like to add uppercase letters to your password?");
//asked whether they want numbers in their password. 
var number = confirm("Would you like to add numbers to your password?");
//asked whether they want symbols on in their password. 
var symbol = confirm("would you like to add symbols to your password?")
}

console.log(length);
console.log(lower);
console.log(upper);
console.log(symbol);
console.log(number);




//added the random functions into a variable. 
var randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber, 
  symbol: getRandomSymbol
};

//Used functions to generate random character types: lowercase, uppercase, numeric, and special characters
//the *26 means that there is a total of 26 letters in teh alphabet (This would be the limit of how many times I want to randomize). 97 is the number where the lowercase letters start in the Browser Character Set. 
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






