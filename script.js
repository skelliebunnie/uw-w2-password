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
	var randomCriteriaListIndex, randomCharIndex;
	var hasLC = true, hasUC = true, hasNM = true, hasSC = true;
	// regex checks: https://stackoverflow.com/a/61550284
	var rxLC = /[a-z]/g;
	var rxUC = /[A-Z]/g;
	var rxNM = /[0-9]/g;
	var rxSC = /[!@#$%^&*()-_=+/\\'\"\[\]{}|?\.,;:`~<>]/g;

	var regex = null;

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

	var completed = false;
	while(!completed) {
		password = "";
		for(var i = 0; i < options.length; i++) {

			// get a random index for a single character in the criteria string
			randomIndex = Math.floor(Math.random() * criteria.length);

			// append the randomly selected character from the
			// criteria string to build the password
			password += criteria[randomIndex];
		}

		if( optLC.checked && rxLC.test(password) ) {
			hasLC = true;
		} else if(optLC.checked) {
			hasLC = false;
		}

		if( optUC.checked && rxUC.test(password) ) {
			hasUC = true;
		} else if(optUC.checked) {
			hasUC = false;
		}

		if( optNM.checked && rxNM.test(password) ) {
			hasNM = true;
		} else if(optNM.checked) {
			hasNM = false;
		}

		if( optSC.checked && rxSC.test(password) ) {
			hasSC = true;
		} else if(optSC.checked) {
			hasSC = false;
		}

		if(hasLC === true && hasUC === true && hasNM === true && hasSC === true) {
			completed = true;
		}
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
