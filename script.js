
// var randomFunctions= {
//   lower:getRandomLower, 
//   upper:getRandomUpper, 
//   number: getRandomNumber, 
//   symbol: getRandomSymbol
// }



// //create array with character choice. 
// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97)}
// //Randomized uppercase letters. There are 26 uppercase letters. The uppercase letters start at the 65 number on the Browser Character Set. 
// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
// };
// //Randomized numbers. There are 10 numbers. The numbers start at 48 on the Browser Character Set. 
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
// };
// //Randomized special characters. created a variable with string and used it to get random symbols. 
// function getRandomSymbol() {
//  var symbol = "!@#$%^&*.";
//  return symbol[Math.floor(Math.random() * symbol.length)];
// };

var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var symbol = "!@#$%^&*"


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  


  let passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
        alert("Please choose a number that is more than 8 and less than 128 characters");
        passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    } 
    //asked whether they want lowecase letters in their password. 
    var uselower = confirm("Would you like to add lowercase letters to your password?");
    //asked whether they want uppercase letters in their password. 
    var useUpper = confirm("would you like to add uppercase letters to your password?");
    //asked whether they want numbers in their password. 
    var useNumber = confirm("Would you like to add numbers to your password?");
    //asked whether they want symbols on in their password. 
    var useSymbol = confirm("would you like to add symbols to your password?");
   
    var allowed = "";
    if (uselower === true){
      allowed += lower;
    }
    if (useUpper === true){
      allowed += upper;
    }
    if (useNumber === true){
      allowed += number;
    }
    if (useSymbol === true){
      allowed += symbol;
    }

    var password = ""; 
    var length = passwordLength
    for (var i = 0 ; i < length; i++){
      var random = Math.floor(Math.random() * allowed.length);
      password += allowed[random];
    }
    return password;

   


  
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
