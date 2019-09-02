// Word List
var wordList = [
    "megatron",
    "brawl",
    "soundwave",
    "shockwave",
    "frenzy"
]
console.log(wordList)

// Empty Variables
var answerWord = []; //where the built answer will go
var lettersGuessed = []; //stores the letters already guessed
// Counter Variables
var remainingGuesses = 6; //attempt limit
var wins = 0; //tracks wins
var losses = 0; //track losses

// Pick a random word

var secretWordLength = Math.floor(Math.random()* (wordList.length));
var secretWord = wordList[secretWordLength];
console.log(secretWord)

for (var i = 0; i < secretWord.length; i++) {
    answerWord.push("_");
}
console.log(answerWord)

// Update the HTML display
function updateDisplay () {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("totalLosses").innerText = losses;
    document.getElementById("currentWord").innerText = answerWord;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("lettersGuessed").innerText = lettersGuessed;
}

// Event Listener
document.onkeyup = function (event) {
    var keyPress = event.key
    console.log(keyPress)
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess(event.key.toLowerCase());
    }

}

// Check a Guess
function checkGuess(letter) {
    var position = [];

    for (var i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letter) {
            position.push(i);
        }
    }
};
console.log(secretWord)
console.log(answerWord)



