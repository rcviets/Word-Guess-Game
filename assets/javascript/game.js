// Word List
var words = [
    "decepticon",
    "cybertron",
    "allspark",
    "assimilation",
    "megatron",
    "starscream",
    "soundwave",
    "barricade",
    "brawl",
]
console.log(words)

//Empty Variables
var secretWord = []; //random word that has been selected
var secretLetters = []; //letters of random word
var spots = 0;
var spotsRight = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 10;


//Set up variables for the start of the game

function startGame() {

    secretWord = words[Math.floor(Math.random() * words.length)];
    secretLetters = secretWord.split("");
    spots = secretLetters.length;

    for (var i = 0; i < spots; i++) {
        spotsRight.push("_");
    }

    // Update HTML
    document.getElementById("currentWord").innerHTML = " " + spotsRight.join(" ");

    console.log(secretWord)
    console.log(secretLetters)
    console.log(spots)
    console.log(spotsRight)
}

// Winning Images


// Game Reset
function reset() {
    guessesRemaining = 10;
    wrongGuess = [];
    spotsRight = [];
    startGame()
}

// Check Guess
function checkGuess(letter) {
    var wordLetters = false

    for (var i = 0; i < spots; i++) {
        if (secretWord[i] === letter) {
            wordLetters = true;
        }
    }
    if (wordLetters) {
        for (var i = 0; i < spots; i++) {
            if (secretWord[i] === letter) {
                spotsRight[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(spotsRight);
}

// Check Wins and Losses
function endGame() {
    console.log("Wins:" + wins + "| Losses:" + losses + "| Remaining Guesses:" + guessesRemaining)

    if (secretLetters.toString() == spotsRight.toString()) {
        wins++
        reset()
        document.getElementById("totalWins").innerHTML = " " + wins;
    }
    else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("totalLosses").innerHTML = " " + losses;
    }
    document.getElementById("currentWord").innerHTML = " " + spotsRight.join(" ");
    document.getElementById("remainingGuesses").innerHTML = " " + guessesRemaining;
}

//Run the Game
startGame()

document.onkeyup = function (event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    checkGuess(guess);
    endGame();
    console.log(guess);
    document.getElementById("lettersGuessed").innerHTML = " " + wrongGuess.join(" ");
}