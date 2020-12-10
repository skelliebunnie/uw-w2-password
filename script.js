// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength = document.querySelector("#pwLength");
var optUC = document.querySelector("#uppercase");
var optLC = document.querySelector("#lowercase");
var optNM = document.querySelector("#numbers");
var optSC = document.querySelector("#specialCharacters");

var options = {
		length: pwLength.value,
		criteria: {
			lowercase: "abcdefghijklmnopqrstuvwxyz",
			uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			characters: "!@#$%^&*()-_=+/\\'\"[]{}|?.,;:`~<>",
			numbers: "0123456789"
		}
	}

function generatePassword() {
	// only update the length value if it's within range
	if(pwLength.value > 7 && pwLength.value < 129) {
		options.length = pwLength.value;
	}

	var criteria = "", password = "";

	if(optLC.checked) {
		criteria += options.criteria.lowercase;
	}
	if(optUC.checked) {
		criteria += options.criteria.uppercase;
	}
	if(optNM.checked) {
		criteria += options.criteria.numbers;
	}
	if(optSC.checked) {
		criteria += options.criteria.characters;
	}

	// if everything was UNchecked,
	// ensure that at least lowercase letters are included
	if(criteria === "") {
		criteria = options.criteria.lowercase;
	}

	for(var i = 0; i < options.length; i++) {
		// get a random index for a single character in the criteria string
		randomIndex = Math.floor(Math.random() * criteria.length);

		// append the randomly selected character from the
		// criteria string to build the password
		password += criteria[randomIndex];
	}

	return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
