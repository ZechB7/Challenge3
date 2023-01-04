// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowerA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialA = [" ", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "'", "{", "}", "|", "~"];
var numsA = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var totalArray = [];
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//must return a string value that is the password
// prompt user to choose a number btwn 8 and 128
// var to save length
// validate user num  
function chooseLength() {
  var length = parseInt(window.prompt("Choose a number between 8 and 128"));
  // //if(length === Nan){
  //   window.alert("Choose a whole number");
  //   chooseLength();
  if (length < 8 || length > 128) {
    window.alert("Try again and listen to directions");
    return chooseLength();
  }
  var characterArray = includeCharacterTypes();
  console.log(characterArray);
  return {length,characterArray};
};

function includeCharacterTypes() {
  var upper = window.confirm("Do you want to include upper case letters?")
  // upper = upper.toLowerCase
  if (upper) {
    totalArray = totalArray.concat(upperA)
  };
  if (window.confirm("Do you want to include lower case letters?")) {
    totalArray = totalArray.concat(lowerA)
  };
  if (window.confirm("Do you want to include special letters?")) {
    totalArray = totalArray.concat(specialA)
  };
  if (window.confirm("Do you want to include numbers?")) {
    totalArray = totalArray.concat(numsA)
  };
  console.log(totalArray);

  if (totalArray.length === 0){
    window.alert("try again.")
    return includeCharacterTypes();
  };
  return totalArray
  // upper = true;
  // includeLower();
  // } else if (upper == "n") {
  //   upper = false;
  //   // includeLower();
  // } else {
  //   window.alert("choose y or n")
  //   includeUpper();
  // }
};

function generatePassword() {
  var options = chooseLength();
  console.log(options);
  var passwordString = ""
for (var i = 0;i<options.length;i++){

  var index = Math.floor(Math.random()*options.characterArray.length)
var digit = options.characterArray[index]
passwordString += digit
}
  return passwordString
};

// needs a for loop somewhere
 // function includeLower(){
  //   var lower = window.prompt("Do you want to include lower case letters? yes(y) or no(n)")
  //   lower = lower.toLowerCase
  //   if(includeLower == "y"){
  //     includeLower = true;
  //     includeSpecial();
  //   } else if (includeLower == "n"){
  //     includeLower = false;
  //     includeSpecial();
  //   } else {
  //     windows.alert("choose y or n")
  //     includeLower();
  //   }
  // };


  // function includeSpecial(){
  //   var special = window.prompt("Do you want to include special characters? yes(y) or no(n)")
  //   special = special.toLowerCase
  //   if(includeSpecial == "y"){
  //     includeSpecial = true;
  //     includeNumbers();
  //   } else if (includeSpecial == "n"){
  //     includeSpecial = false;
  //     includeNumbers();
  //   } else {
  //     windows.alert("choose y or n")
  //     includeSpecial();
  //   }
  // };


  // function includeNumbers(){
  //   var nums = window.prompt("Do you want to include numbers? yes(y) or no(n)")
  //   nums = nums.toLowerCase
  //   if(includeNumbers == "y"){
  //     includeNumbers = true;
  //     includeNumbers();
  //   } else if (includeSNumbers == "n"){
  //     includeNumbers = false;
  //   } else {
  //     windows.alert("choose y or n")
  //     includeNumbers();
  //   }
  // };

  //vars that include all user options of each category. array of string for each category
  // var upper = ["A","B"]
  // if user says to include that category choose random elements from the array
  // how to decide how many elements to choose from each array 
  // validate that at least one category was chosen
  // if this was true do this 
  // else none was chosen re ask