// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowerA =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperA =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialA = [" ","!","'","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","'","{","}","|","~"];
var numsA = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//must return a string value that is the password
  // prompt user to choose a number btwn 8 and 128
  // var to save length
  // validate user num  
function generatePassword(){

function chooseLength(){
 var length = window.prompt("Choose a number between 8 and 128");
  // //if(length === Nan){
  //   window.alert("Choose a whole number");
  //   chooseLength();
      if(8 < length < 128){
        includeUpper();
      }
      else{
        window.alert("Try again and listen to directions");
        chooseLength();
      }
    };
chooseLength();
console.log(Length);
   

  function includeUpper(){ 
    var upper = window.prompt("Do you want to include upper case letters? yes(y) or no(n)")
    upper = upper.toLowerCase
    if(upper == "y"){
      upper = true;

    } else if (upper == "n"){
      upper = false;
    } else {
      window.alert("choose y or n")
      includeUpper();
    }
  };
  console.log(upper);

  function includeLower(){
    var lower = window.prompt("Do you want to include lower case letters? yes(y) or no(n)")
    lower = lower.toLowerCase
    if(includeLower == "y"){
      includeLower = true;
    } else if (includeLower == "n"){
      includeLower = false;
    } else {
      windows.alert("choose y or n")
      includeLower();
    }
  };
  includeLower();
  console.log(includeLower);

  
  function includeSpecial(){
    var special = window.prompt("Do you want to include special characters? yes(y) or no(n)")
    special = special.toLowerCase
    if(includeSpecial == "y"){
      includeSpecial = true;
    } else if (includeSpecial == "n"){
      includeSpecial = false;
    } else {
      windows.alert("choose y or n")
      includeSpecial();
    }
  };
  includeSpecial();
  console.log(includeSpecial);

  function includeNumbers(){
    var nums = window.prompt("Do you want to include numbers? yes(y) or no(n)")
    nums = nums.toLowerCase
    if(includeNumbers == "y"){
      includeNumbers = true;
    } else if (includeSNumbers == "n"){
      includeNumbers = false;
    } else {
      windows.alert("choose y or n")
      includeNumbers();
    }
  };
  includeNumbers();
  console.log(includeNumbers);

  //vars that include all user options of each category. array of string for each category
  // var upper = ["A","B"]
  // if user says to include that category choose random elements from the array
    // how to decide how many elements to choose from each array 
    // validate that at least one category was chosen
    // if this was true do this 
    // else none was chosen re ask
    return passwordString
};

// needs a for loop somewhere