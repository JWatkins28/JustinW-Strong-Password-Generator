// Assignment Code
var generateBtn = document.querySelector("#generate");
// Creating the array my password character keys will be in
var passContent = {
  caps: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
};



// Created the generatePassword function that's called in the starter code
function generatePassword() {
  // Prompt for the length of the password
  var passwordL = Number(window.prompt("What should the length of the password be?\n(Between 8-128 characters)"));
  // If the password does not meet the requirements, cancel the prompts and return no value (but not null)
  if (!passwordL || passwordL < 8 || passwordL > 128) {
    window.alert("Please enter a number between 8-128!")
    return "";
  }
  // Prompts for each of the parameters
  var lowerL = window.confirm("Would you like it to contain lower case letters?");
  var capitalL = window.confirm("Would you like it to contain capital letters?");
  var symbolsL = window.confirm("Would you like it to contain Special Characters?\n(ex: ! @ # $ % etc)");
  var numbersL = window.confirm("Would you like it to contain numbers?");
  // Checks to make sure at least one of the 4 above options was chosen
  if (lowerL + capitalL + numbersL + symbolsL === 0) {
    window.alert("Please choose at least one character option!");
    return ""; 
  }

  // Created another array of the original password key strings with some "true" checks so it will randomlly grab from the key strings or if false return a blank
  var grabbedChars = [
    function caps() {
      if (capitalL) {
      return passContent.caps[Math.floor(Math.random() * passContent.caps.length)]; 
      } else {
        return "";
      }
    },
    function lower() {
      if (lowerL) {
      return passContent.lower[Math.floor(Math.random() * passContent.lower.length)];
      } else {
        return "";
      }
    },
    function numbers() {
      if (numbersL) {
      return passContent.numbers[Math.floor(Math.random() * passContent.numbers.length)];
      } else {
        return "";
      }
    },
    function symbols() {
      if (symbolsL) {
      return passContent.symbols[Math.floor(Math.random() * passContent.symbols.length)];
    } else {
      return "";
    }
    }
  ];
  // Created the variable the actual password will be stored in
  var createdP = "";
  // While loop to create the password. Set to run until the password is the appropriate length as set by the user
  // It will go into the new "grabbedChars" array which will run the function/truth check and if it passes: it adds a letter; and if it fails: it adds nothing and loops again
  while (passwordL > createdP.length) {
    var p = grabbedChars[Math.floor(Math.random() * grabbedChars.length)]
      createdP += p();
  }
  return createdP;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
