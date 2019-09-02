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
var guessesRemaing = 10;


//Set up variables for the start of the game

function startGame() {


    var secretWord = Math.floor(Math.random() * (words.length));
    var secretLetters = secretWord.split("");
    console.log(secretWord)

    for (var i = 0; i < spots; i++) {
        spotsAndRight.push("_");


    }
    //document.getElementById(play - again).style.cssText = "display: none";
    //document.getElementById(hint).style.cssText = "display: none";
    //document.getElementById(you - win).style.cssText = "display: none";
    //document.getElementById(you - lose).style.cssText = "display: none";

    updateDisplay();
};

console.log(startGame)

//Update the display on HTML page

function updateDisplay() {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("totalLosses").innerText = losses;
    document.getElementById("currentWord").innerText = wordGuessText;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("lettersGuessed").innerText = lettersGuessed;

};

var wordGuessText = "_";
for (var i = 0; i < wordGuess.length; i++) {
    wordGuessText += wordGuess[i];
}

// find letter in secretWord, and push that into "_"
function checkGuess(letter) {
    var positions = [];

    for (var i = 0; i < words[secretWord].length; i++) {
        if (words[secretWord][i] === letter) {
            positions.push(i);
        }
    }

    if (positions.length <= 0) {
        remainingGuesses--;
    }
    else {
        for (var i = 0; i < positions.length; i++) {
            wordGuess[positions[i]] = letter;
        }
    }
};

// check if the game has been won
function checkWin() {
    if (wordGuess.indexOf("_") === -1) {
        wins++;
        hasFinished = true;
    }
};

// check if the game has been lost
function checkLoss() {
    if (wordGuess.indexOf("_") === -1) {
        losses++;
        hasFinished = true;
    }
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (lettersGuessed.indexOf(letter) === -1) {
            lettersGuessed.push(letter);
            checkGuess(letter);
        }
    }
};

// key up function
document.onkeydown = function (event) {
    var keyPress = event.key
    console.log(keyPress)
    if (gameFinish) {
        startGame();
        gameFinish = false;
    }
    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
            updateDisplay();
            checkWin();
            checkLoss();
        }
    }
};

    // if (remainingGuesses <= 0) {
    //  document.getElementById("you-lose").style.cssText = "display: block";
    // document.getElementById("play-again").style.cssText = "display: block";
    //   gameFinish = true;
    // }
