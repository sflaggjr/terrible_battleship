//Defining Variables for a battleship game.
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

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
		else
			{
				alert("MISS!");
			}
	//Did we win?
		if (hits == 3)
			{
				isSunk = true;
				alert("You sunk my battleship!");
				var stats = "It took " + guesses + " shots too sink the battleship, " + "Which means that your accuracy was " + Math.floor(3 / guesses * 100) + "%";
				alert(stats);
			}
	}
