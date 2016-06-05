/* Author: Katrina Prather
   Date: June 4, 2016
   Project: Guessing Game
*/

/* Pseudocode
  -- Establish random value between 1 and 20
  -- Set number of tries to 0
  -- Get player's guess
  -- Track and increment number of tries
  -- Check if player's guess equals secret number
        If no - if guess is higher than secret number
	      Then say guess is too high
        If no - if guess is lower than secret number
	      Then say guess is too low
  -- If player's guess equals secret number
	    Tell player he/she wins and number of tries
*/

var secretNum = Math.ceil(Math.random() * 20);	//Produces random number
var numOfAttempts = 0;	//Keeps track of the number of attempts at guessing the secret number
var myform = document.querySelector("form");	//Holds the form
var result = document.querySelector("#feedback"); //Allows game feedback to be displayed to player
var playerGuess = document.querySelector("#guess"); //Holds the player's guess for the secret number 
var winner = false; //Used to indicate if player wins the game

/*Function allows user four attempts at guessing the secret number. Feedback is provided when the player's guess
  is too high or too low and when it matches the secret number*/
function GuessingGame(event) {
	event.preventDefault();
	numOfAttempts++;
	while (numOfAttempts <= 4){

		if(playerGuess.value != secretNum){
			if(playerGuess.value > secretNum){
				result.textContent = playerGuess.value + " is too high! " + "-  Attempt " + numOfAttempts;
			}
			else {
				result.textContent = playerGuess.value + " is too low! " + "-  Attempt " + numOfAttempts;
			}

		}
		else if (playerGuess.value == secretNum){
			result.textContent = "You guessed " + playerGuess.value + ": The secret number is " + secretNum + ":  Attempt " + numOfAttempts + ":  Winner, winner, chicken dinner!";
			winner = true;
			alert("GAME OVER!");
			result.textContent = "";
		}	
			playerGuess.value = "";
			break;
	}

	if(numOfAttempts == 4 && winner == false){
		result.textContent = "The secret number is " + secretNum + ":  Good game kiddo!";
		alert("GAME OVER!");
		result.textContent = "";
	}
}

	myform.addEventListener("submit", GuessingGame);
	

