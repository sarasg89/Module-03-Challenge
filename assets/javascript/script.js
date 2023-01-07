// Assignment code here

// Prompt box to choose password length
function promptLength() {
  let length = prompt("How long do you want your password to be?");
  if (length < 8) {
    window.alert("That's too short. Please try again and choose at least 8 characters.")
    return false
  } else if (length > 128) {
    window.alert("That's too long. Please try again and choose less than 128 characters.")
    return false
  } else {
    console.log(length)
  } 
  return true
}

// Prompt box to choose lowercase letters
function promptLowercase() {
  let lowercase = window.confirm("Would you like your password to contain lowercase letters?");
  console.log(lowercase);
  return lowercase
}

// Prompt box to choose uppercase letters
function promptUppercase() {
  let uppercase = window.confirm("Would you like your password to contain uppercase letters?");
  console.log(uppercase);
  return uppercase
}

// Prompt box to choose numbers
function promptNumbers() {
  let numbers = window.confirm("Would you like your password to contain numbers?");
  console.log(numbers);
  return numbers
}

// Prompt box to choose special characters
function promptCharacters() {
  let characters = window.confirm("Would you like your password to contain special characters?");
  console.log(characters);
  return characters
}

// Function to open all prompt boxes when button is clicked
function generateBtn() {
  if (!promptLength()) {
    return
  }
  let hasLowercase = promptLowercase();
  let hasUppercase = promptUppercase();
  let hasNumbers = promptNumbers();
  let hasCharacters = promptCharacters();
  if (!(hasLowercase || hasUppercase || hasNumbers || hasCharacters)) {
    window.alert("Oh oh, you must choose at least one character type. Please try again.");
    console.clear();
  }
}

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


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);