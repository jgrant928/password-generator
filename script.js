// Assignment code here

// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  
  function getPasswordOptions() {
    // 3)
    // Variable to store length of password from user input
    var length = parseInt(
      prompt('How many characters would you like your password to contain?'),
    );
  
    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
    if (Number.isNaN(length)) {
      alert('Password length must be provided as a number');
      return null;
    }
  
    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    if (length < 8) {
      alert('Password length must be at least 8 characters');
      return null;
    }

    if (length > 128) {
        alert('Password length must be no more than 128 characters');
        return null;
      }
  
    // Variable to store boolean regarding the inclusion of special characters
    var hasSpecialCharacters = confirm(
      'Click OK to confirm including special characters.'
    );
  
    // Variable to store boolean regarding the inclusion of numeric characters
    var hasNumericCharacters = confirm(
        'Click OK to confirm including numeric characters.'
    );
  
    // Variable to store boolean regarding the inclusion of lowercase characters
    var hasLowerCasedCharacters = confirm(
        'Click OK to confirm including lowercase characters.'
    );
  
    // Variable to store boolean regarding the inclusion of uppercase characters
    var hasUpperCasedCharacters = confirm(
        'Click OK to confirm including uppercase characters.'
    );
  
    // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    // Object to store user input
    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters,

    };
  
    return passwordOptions;
  }
  
function generatePassword() {
var options = getPasswordOptions();
    //Code Your logic Below

    // Created 3 arrays to store the types of characters to include in the password, the characters randomly chosen, and for final password text
    var passwordText = [];
    var possibleCharacters = [];
    var chosenCharacters = [];
    
    // Created 4 for loops to loop through each of the character types selecting random characters then push them into the chosen characters arrat
    if (options.hasSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        chosenCharacters.push(getRandom(specialCharacters));
        }

    if (options.hasNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        chosenCharacters.push(getRandom(numericCharacters));
        }

    if (options.hasLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        chosenCharacters.push(getRandom(lowerCasedCharacters));
        }   
    if (options.hasUpperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        chosenCharacters.push(getRandom(upperCasedCharacters));
        }

    // Use a for loop to select random characters for the possible characters array

    for (var i = 0; i < options.length; i++) {
        var possibleCharacter = getRandom(possibleCharacters);
    
    //push random possible character to passwordText

        passwordText.push(possibleCharacter);
    }   

    //loop through characters placing them in passwordText

    for (var i = 0; i < chosenCharacters.length; i++) {
        passwordText[i] = chosenCharacters[i];
    }   

    //join characters together for password

    return passwordText.join('');

  }
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

