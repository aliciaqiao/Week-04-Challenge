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

function validateInputValue(value)
{
  if (value == 1)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function randomIntFromInterval(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function generatePassword()
{
  var choice;

  var password_length_min = 0;
  var password_length_max = 0;

  var isPassword_length = false;
  var isCharacter_type = false;

  var needsLowerCase = false;
  var needsUpperCase = false;
  var needsNumeric = false;
  var needsSpecialCharacters = false;

  while (!isPassword_length || !isCharacter_type)
  {
    choice = prompt("\
      Please enter an password criteria \
      1. length of password \
      2. character types:", "enter your choice");

    if (choice == "1")
    {
      password_length_min = prompt("\
        Please enter the minimal password length(at least this length)", "enter your choice");

      password_length_max = prompt("\
        Please enter the max password length(no more than this length)", "enter your choice");

      isPassword_length = true;
    }
    else if (choice == "2")
    {
      isCharacter_type = true;

      needsLowerCase = prompt("\
        Need lowercase ?", "0 for no, 1 for yes");

      needsUpperCase = prompt("\
        Need uppercase ?", "0 for no, 1 for yes");

      needsNumeric = prompt("\
        Need Numeric ?", "0 for no, 1 for yes");

      needsSpecialCharacters = prompt("\
        Need special character ?", "0 for no, 1 for yes");

      if (validateInputValue(needsLowerCase) ||
        validateInputValue(needsUpperCase) ||
        validateInputValue(needsNumeric) ||
        validateInputValue(needsSpecialCharacters))
      {
        isCharacter_type = true;
      }
      else
      {
        alert("invalid character type choice. Please try again");
      }
    }
    else
    {
      alert("invalid input. Please try again");
    }
  }
  
  var final_password= [];
  var randomLength = randomIntFromInterval(parseInt(password_length_min), parseInt(password_length_max));
  var randomChoice = ["character", "number", "special character"];

  console.log("needsSpecialCharacters is " + needsSpecialCharacters + " type is " + typeof(needsSpecialCharacters));
  console.log("needsNumeric is " + needsNumeric + " type is " + typeof(needsNumeric));
  console.log("needsUpperCase is " + needsUpperCase + " type is " + typeof(needsUpperCase));
  console.log("needsLowerCase is " + needsLowerCase + " type is " + typeof(needsLowerCase));

  if (!validateInputValue(needsSpecialCharacters))
  {
    console.log("No need SpecialCharacters");
    var index = randomChoice.indexOf("special character");
    if (index > -1) 
    {
      randomChoice.splice(index, 1);
    }
  }

  if (!validateInputValue(needsNumeric))
  {
    console.log("No need number");
    var index = randomChoice.indexOf("number");
    if (index > -1) 
    {
      randomChoice.splice(index, 1);
    }
  }

  console.log("randomChoice array is " + randomChoice);

  var randomUpperLowerCase = ["lower", "upper"];
  if (!validateInputValue(needsUpperCase))
  {
    console.log("No need UpperCase");
    var index = randomUpperLowerCase.indexOf("upper");
    if (index > -1) 
    {
      randomUpperLowerCase.splice(index, 1);
    }
  }

  if (!validateInputValue(needsLowerCase))
  {
    console.log("No need LowerCase");
    var index = randomUpperLowerCase.indexOf("lower");
    if (index > -1) 
    {
      randomUpperLowerCase.splice(index, 1);
    }
  }

  if (randomUpperLowerCase.length == 0)
  {
    console.log("No need character");
    var index = randomChoice.indexOf("character");
    if (index > -1) 
    {
      randomChoice.splice(index, 1);
    }
  }

  console.log("randomUpperLowerCase array is " + randomUpperLowerCase);

  var specialCharacter = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".",
    "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  var normalCharacter = ["a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z"];

  for (var i = 0; i < randomLength; i++)
  {
    var randomonething;
    
    var randomChoice_index = randomChoice[randomIntFromInterval(0, randomChoice.length - 1)];

    console.log("randomChoice_index is " + randomChoice_index + " at loop " + i);
  
    if (randomChoice_index == "character")
    {
        //Choose random character
        randomonething = normalCharacter[randomIntFromInterval(0, normalCharacter.length - 1)]

        if (randomUpperLowerCase[randomIntFromInterval(0, randomUpperLowerCase.length - 1)] == "upper")
        {
          randomonething = randomonething.toUpperCase();
        }

    }
    else if (randomChoice_index == "number")
    {
        //Choose random number
        randomonething = randomIntFromInterval(0, 9);
    }
    else if (randomChoice_index == "special character")
    {
        //Choose random special character
        randomonething = specialCharacter[randomIntFromInterval(0, specialCharacter.length - 1)];
    }

    final_password.push(randomonething);
  }

  console.log("final password is" + final_password);

  return final_password.join('');
}