// Word List
var words = [
    "overlord",
    "decepticon",
    "cybertron",
    "allspark",
    "domination",
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
var spotsAndRight = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 10;


//Set up variables for the start of the game

function startGame() {


    var secretWord = Math.floor(Math.random() * (words.length));
    var secretLetters = secretWord.split("");


    for (var i = 0; i < spots; i++) {
        spotsAndRight.push("_");
    }
    //document.getElementById(play - again).style.cssText = "display: none";
    //document.getElementById(hint).style.cssText = "display: none";
    //document.getElementById(you - win).style.cssText = "display: none";
    //document.getElementById(you - lose).style.cssText = "display: none";

    // Update HTML
    document.getElementById("currentWord").innerHTML = " " + spotsAndRight.join(" ");

    console.log(secretWord)
    console.log(secretLetters)
    console.log(spots)
    console.log(spotsAndRight)
}

// Game Reset
function reset() {
    guessesRemaining = 10;
    wrongGuess = [];
    spotsAndRight = [];
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
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] === letter) {
                spotsAndRight[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(spotsAndRight);
}