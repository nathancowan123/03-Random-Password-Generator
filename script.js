// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var passLength = window.prompt("Choose the number of charactors of your new password (8 to 120 charactors).");

  if (passLength > 120 || passLength < 8){
   var passLengthFail = window.alert("You need to select a password length more than 8 and less than 120 characters");
   return;

     } else (passLength > 8 || passLength < 120) 
      var specialChar = window.prompt("Great! Would you like to add speical characters to your password?");

  if (specialChar === "Yes" || specialChar === "yes" || specialChar === "YES")
     var specialCharTrue = window.alert("Your password will contain special characters.");
    
    
    if (specialChar === "NO" || specialChar === "No" || specialChar === "no")
    var specialCharFalse = window.alert("Your password will not contain special characters.");

    var upperLower = window.prompt("Would you like to add upper and lower case letters?");

    if (upperLower === "Yes" || upperLower === "yes" || upperLower === "YES")
        var upperLowerTrue = window.alert("Your password will contain upper and lower case letters");

  if (upperLower === "NO" || upperLower === "No" || upperLower === "no")
      var upperLowerFalse = window.alert("Your password will contain only contain lower case letters");

 
      return "Your Password";
    }

  
     







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
