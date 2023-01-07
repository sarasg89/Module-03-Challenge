// Assignment code here

/* Password criteria:
8 - 128 characters
Special characters: ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~
Lowercase / uppercase / numeric / special characters */

// Lowercase letters
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Uppercase letters
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Numbers
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Special characters
function getRandomCharacter() {
  const specialCharacters = " !\x22#$%&\x27()*+,-./:;<=>?@[\]";
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

// Function to get one of each type randomly
const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomCharacter
}

// Promp function to display prompt box
function openPrompt() {
  let length = prompt("How long do you want your password to be?");
  if (length < 8) {
    window.alert("That's too short. Please choose at least 8 characters.")
  } else if (length > 128) {
    window.alert("That's too long. Please choose less than 128 characters.")
  }
}



// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);