
// GIVEN I need a new, secure password: 

// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria
//   *********************prompt with criterias
// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password
//   ****************select which criteria I want? to include in my password
// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters
//  *************** criteria of length for PW 
// // WHEN prompted for character types to include in the password
// // THEN I choose lowercase, uppercase, numeric, and/or special characters
//   ******************criteria for characters
// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type should be selected
//  ********* validate each criteria after completed. a character type selected? 
// // WHEN all prompts are answered
// // THEN a password is generated that matches the selected criteria
//  *********** generate password after all criteria is completed. 
// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page
//  ************ display in alert!! 


  var characters = "abcdefghijklmnopqrstuvwxyz1234567890!@#$*".split("")


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
