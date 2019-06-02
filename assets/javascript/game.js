// create the variables 
// user guess and computer answer 

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Creating varaibles to hold the number of wins, loses, guesses left, guesses so far 

var wins = 0;
var losses = 0;
var maxGuesses = 9;
var guessesLeft = 9;
// var letterChoice = [];

// Variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
// var lettersGuessedText = document.getElementById("lettersGuessed-text");
var guessesLeftText = document.getElementById("guessesLeft-text");

wins.innerHTML = wins;
losses.innerHTML = losses;
// lettersGuessed.innerHTML = lettersGuessed.join(',');
guessesLeft.innerHTML = guessesLeft;



// this function will run when the user presses a key 
document.onkeyup = function(event) {

  // determines which key is pressed 
  var userGuess = event.key;

  // these are the comp guesses 
  var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // if else function (win/loss)
  // Wins (# of times the user has guessed)
  // increase win counter 
  // restart without refreshing the page 
  // Losses (# of guesses the user failed)
  // increase losses counter 
  // restart without refreshing the page .rewrite()??


  if (computerChoices.indexOf(userGuess) > -1) {
    if (userGuess === compGuess) {
      wins++;
  
    }
  
     else if (guessesLeft == 0 ){
      losses++;
      guessesLeft = 9;
      // guessesLeft--;
      // lettersGuessed.push(userGuess);
    }
  

  if (userGuess !== compGuess) {
    guessesLeft --;
    losses++;
    lettersGuessed = [];
  
  }
}



  // Hide the directions
  directionsText.textContent = "";

  // Display the user and computer guesses, and wins/losses/letters guessed/ guesses left.
  userChoiceText.textContent = "You chose: " + userGuess;
  computerChoiceText.textContent = "The computer chose: " + compGuess;
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  // lettersGuessedText.textContent = "Letters Guessed: " + letterChoice;
  guessesLeftText.textContent = "Guesses Left: " + guessesLeft;

;

};

  
