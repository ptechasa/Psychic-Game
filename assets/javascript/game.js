// Create variable for using in Psychic Game
var wins = 0;
var losses = 0;
var guesses;
var computerGuess;


function playGame() {

    // Computers choose a letter 
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var random = Math.floor(Math.random() * letters.length);
    computerGuess = letters[random];
    guesses = 9;
    console.log("computerGuess ", computerGuess);

}
playGame()

//When user presses any keys ,it launches a function to execute 
document.onkeypress = function (event) {

    //If user and computer choose the same letter
    //win adds 1
    //start new play game 
    if (event.key === computerGuess) {
        wins++;
        playGame()

        // If both choose difference
        // guesses decrease 1
    } else {
        guesses--;
    }

    //If user guesses reach to 0
    //losses add 1
    //start to play game 
    if (guesses == 0) {
        losses++;
        playGame()

    }
    console.log("guesses ", guesses)
    console.log("losses ", losses)
    console.log("wins ", wins)

}



