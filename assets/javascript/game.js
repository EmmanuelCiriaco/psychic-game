//options available
var comOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//score
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//allows the computer to randomly select a letter from the array
var computerGuess = comOptions[Math.floor(Math.random() * comOptions.lenth)];

//allows user 9 guesses
var updateGuessesLeft = function() {
	document.getElementById("remainingGuesses").innerHTML = "Guesses left: " + guessesLeft;

};


var updateLetterToGuess = function() {
	this.letterToGuess = this.comOptions[Math.floor(Math.random() * this.comOptions.lenth)];
};

//this function displays the guessed letters separated by commas
var updateGuesses = function() {
	document.getElementById("guessed").innerHTML = "Your guesses so far: " + guessedLetters.join(",");
};

//this function will be called once we reset everything
var reset = function(){
	guessesLeft = 9;
	guessedLetters = [];

	updateGuessesLeft();
	updateGuesses();

};
updateLetterToGuess();
updateGuessesLeft();

//Here we take user input and update HTML accordingly
document.onkeyup = function(event) {
	guessesLeft--;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	guessedLetters.push(userGuess);
	updateGuessesLeft();
	updateGuesses();

	if (guessesLeft > 0){
		if (userGuess == letterToGuess){
			wins++;
			document.getElementById("wins").innerHTML = "Wins: " + wins;
			reset();
		}
	}
	else if (guessesLeft == 0){
		losses++;
		document.getElementById("losses").innerHTML = "Losses: " + losses;
		reset();
	}

};




