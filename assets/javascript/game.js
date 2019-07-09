// Define variable for using in Psychic Game
var wins = 0;
var losses = 0;
var guesses = 9;
var userGuessLeft = [];
var guessRemaining = document.querySelector('#numGuessLeft');

// Random letters a-z
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


//Computer's random words
var comRandomLetters = Math.floor(Math.random() * letters.length);
console.log(letters[comRandomLetters]);


//User's picks the words and guess left start from 9
function userPickWords(event) {
    guesses--;
    guessRemaining.innerText = guesses;
    // console.log(event.key)
    userGuessLeft.push(event.key);
    document.querySelector("#guessSoFar").innerText = userGuessLeft;        
}
document.onkeypress = userPickWords;


// When user and computer choose the same letter



//When user and computer choose different letter




// User guesses left and reach to 0






