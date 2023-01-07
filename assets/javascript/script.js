// Assignment code here

// Prompt box to choose password length
function promptLength() {
  let lengthAnswer = prompt("How long do you want your password to be?");
  if (lengthAnswer < 8) {
    window.alert("That's too short. Please try again and choose at least 8 characters.");
    return false;
  } else if (lengthAnswer > 128) {
    window.alert("That's too long. Please try again and choose less than 128 characters.");
    return false;
  } else {
    console.log(lengthAnswer);
    return lengthAnswer;
  }
}

// Prompt box to choose lowercase letters
function promptLowercase() {
  let lowercaseAnswer = window.confirm("Would you like your password to contain lowercase letters?");
  console.log(lowercaseAnswer);
  return lowercaseAnswer;
}

// Prompt box to choose uppercase letters
function promptUppercase() {
  let uppercaseAnswer = window.confirm("Would you like your password to contain uppercase letters?");
  console.log(uppercaseAnswer);
  return uppercaseAnswer;
}

// Prompt box to choose numbers
function promptNumbers() {
  let numbersAnswer = window.confirm("Would you like your password to contain numbers?");
  console.log(numbersAnswer);
  return numbersAnswer;
}

// Prompt box to choose special characters
function promptCharacters() {
  let charactersAnswer = window.confirm("Would you like your password to contain special characters?");
  console.log(charactersAnswer);
  return charactersAnswer;
}

// Function to generate lowercase letters
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Function to generate uppercase letters
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Function to generate numbers
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Function to generate special characters
function getRandomCharacter() {
  const specialCharacters = " !\x22#$%&\x27()*+,-./:;<=>?@[\]";
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

const getTypes = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  character: getRandomCharacter
}

// Function to open all prompt boxes when button is clicked and then generate a password if all criteria are met
function generateBtn() {
  let whatLength = promptLength();
  if (whatLength < 129 && whatLength > 7) {
    let hasLowercase = promptLowercase();
    let hasUppercase = promptUppercase();
    let hasNumbers = promptNumbers();
    let hasCharacters = promptCharacters();
    if (!(hasLowercase || hasUppercase || hasNumbers || hasCharacters)) {
      window.alert("Oh oh, you must choose at least one character type. Please try again.");
      console.clear();
    }
    let password = generatePassword(whatLength, hasLowercase, hasUppercase, hasNumbers, hasCharacters);
    writePassword(password);
  } else {
    return;
  }
}

// Function to generate the password randomly
function generatePassword(length, lower, upper, number, character) {
  let generatedPassword = "";
  for (i = 0; i < length; i++) {
    generatedPassword += getRandomLower();
    generatedPassword += getRandomUpper();
    generatedPassword += getRandomNumber();
    generatedPassword += getRandomCharacter();
  }
  let password = generatedPassword.slice(0, length);
  console.log(password);  
  return password;
}

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);