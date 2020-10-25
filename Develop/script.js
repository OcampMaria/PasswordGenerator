
//Generate Password click event. 
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Generate password Function. 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

};




// Generate event listener. Added variables to define different criterias for password.
generateBtn.addEventListener("click", writePassword); 

function generatePassword(lower, upper, number, symbol, length) {
 


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
  //minimum count for character types
  var minimumCount = 0;

  var minimumNumber = "";
  var minimumLower = "";
  var minimumUpper = "";
  var minimumSymbol = "";




//Used functions to generate random character types: lowercase, uppercase, numeric, and special characters
//the *26 means that there is a total of 26 letters in teh alphabet (This would be the limit of how many times I want to randomize). 97 is the number where the lowercase letters start in the Browser Character Set. 

var functionArray = [
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  },
  //Randomized uppercase letters. There are 26 uppercase letters. The uppercase letters start at the 65 number on the Browser Character Set. 
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  },
  //Randomized numbers. There are 10 numbers. The numbers start at 48 on the Browser Character Set. 
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  },
  //Randomized special characters. created a variable with string and used it to get random symbols. 
  function getRandomSymbol() {
   var symbol = "!@#$%^&*.";
   return symbol[Math.floor(Math.random() * symbol.length)];
  }
];

// maked sure that sure whether user selected for all and uses empty minimums from above

if (number === true) {
  minimumNumbers = functionArray[0];
  minimumCount++;

}

if (lower === true) {
  minimumLowerCases = functionArray[1];
  minimumCount++;

}

if (upper === true) {
  minimumUpperCases = functionArray[2];
  minimumCount++;

}

if (symbol === true) {
  minSymbol = functionArray[3];
  minimumCount++;

}

// empty string variable for the for loop below
var randomPasswordGenerated = "";

// loop getting random characters
for (let i = 0; i < (parseInt(length) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGenerated += functionArray[randomNumberPicked]();

}

// look for the minumum chracters added. 
randomPasswordGenerated += minimumNumber;
randomPasswordGenerated += minimumLower;
randomPasswordGenerated += minimumUpper ;
randomPasswordGenerated += minimumSymbol;


return randomPasswordGenerated;

}









