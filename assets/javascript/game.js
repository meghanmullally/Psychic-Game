// create the variables 
// user guess and computer answer 

var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compGuess = chars[Math.floor(Math.random() * chars.length)];

// win and losses variables 
var wins = 0;
var loses = 0;

// Max guesses and guesses left 
// guesses so far and user guesses 

var maxG = 9;
var leftG = 9;
var guessesSoFar = "";
var userGuess = "";

// Guess what letter I'm thinking 



//TODO: onokeyup = function 
// this function will run when the user presses a key 
document.onkeyup = function (event) {


  // determines which key is pressed 
  var userGuess = event.key;
  // these are the comp guesses 
  var compGuess = chars[Math.floor(Math.random() * chars.length)];


}



//TODO: IF ELSE function 
// Wins (# of times the user has guessed)
// increase win counter 
// restart without refreshing the page 

// Losses (# of guesses the user failed)
// increase losses counter 
// restart without refreshing the page .rewrite()??

//# of guesses left 


// the specific letters the user typed 
// show until they win o loses 