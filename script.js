
//Defined variables for PAssword criteria (Character selection). 
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

  //defined Passwordlenght. I added a prompt for th euser to select the length of the password. 
  let passwordLength=parseInt(prompt("How many characters would you like your password to be? The password cannot be less than 8 or more than 128 characters."));
  //statement to select the password. Cannot select a password to be less tha 8 characters otherwise an alert will show up. 
    while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
        alert("Please choose a number that is more than 8 and less than 128 characters");
        passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    } 
    //Asked whether they want lowecase letters in their password and saved on the userLower variable for future access.   
    var uselower = confirm("Would you like to add lowercase letters to your password?");
    //Asked whether they want uppercase letters in their password and saved on variable for future access. 
    var useUpper = confirm("would you like to add uppercase letters to your password?");
    //Asked whether they want numbers in their password and saved on the variable for future access.
    var useNumber = confirm("Would you like to add numbers to your password?");
    //Asked whether they want symbols in their password and saved in a variable for future access. 
    var useSymbol = confirm("would you like to add symbols to your password?");
   
    //created variable allowed that contains "" this will access the variabels for character criteria. 
    var allowed = "";
    
    //used if statements to select which character criteria to use in the random password in case the user selects them. 
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

    //password is string
    var password = ""; 
    //the lenght of the password is stored in passwordLength 
    var length = passwordLength
    //created a loop where I included the character criteria and the length to create the random password. 
    for (var i = 0 ; i < length; i++){
      var random = Math.floor(Math.random() * allowed.length);
      password += allowed[random];
    }
    return password;
  
};
// Add event listener on generateBtn. When this button is clicked, the function writePasswords takes into effect. 
generateBtn.addEventListener("click", writePassword)
