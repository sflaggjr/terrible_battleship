//Defining Variables for a battleship game.
var location1 = 4;
var location2 = 5;
var location3 = 6;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false)
	{
	//Initialize the player's guess
		guess = prompt("Ready, Aim, Fire! (Enter a number 0-6):");
		if (guess < 0 || guess > 6)
			{
				alert("Please enter a valid response");
			}
		else
			{
				guesses = guesses + 1;
			}
		
	//Did we hit the battleship?
		if (guess == location1 || guess == location2 || guess == location3)
			{
				alert("HIT!");
				hits = hits + 1;
			}
	//Did we win?
		if (hits == 3)
			{
				isSunk = true;
				alert("You sunk my battleship!");
				var stats = "It took " + guesses + " shots too sink the battleship, " + "Which means that your accuracy was " + (3 / guesses);
				alert(stats);
			}
	}
