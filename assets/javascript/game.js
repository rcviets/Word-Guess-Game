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
var limit = 6;

var lettersGuessed = [];
var currentWordIndex;
var secretWord = [];
var remainingGuesses = [];
var gameStarted = false;
var gameFinish = false;
var wins = 0;
var losses = 0;

function resetGame() {
    remainingGuesses = limit;
    gameStarted = false;

    currentWordIndex = Math.floor(Math.random() * (words.length));

    lettersGuessed = [];
    secretWord = [];

    for (var i = 0; i < words[currentWordIndex].length; i++) {
        secretWord.push("_");
    }
    //document.getElementById(play - again).style.cssText = "display: none";
    //document.getElementById(hint).style.cssText = "display: none";
    //document.getElementById(you - win).style.cssText = "display: none";
    //document.getElementById(you - lose).style.cssText = "display: none";

    updateDisplay();
};

function updateDisplay() {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("totalLosses").innerText = losses;
    document.getElementById("currentWord").innerText = "";

    for (var i = 0; i < words.length; i++) {
        document.getElementById("currentWord").innerText += secretWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("lettersGuessed").innerText = lettersGuessed;

    if (remainingGuesses <= 0) {
      //  document.getElementById("you-lose").style.cssText = "display: block";
       // document.getElementById("play-again").style.cssText = "display: block";
        gameFinish = true;
    }
};

document.onkeyup = function (event) {
    var keyPress = event.key
    console.log(keyPress)
    if (gameFinish) {
        resetGame();
        gameFinish = false;
    }
    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }
    }
    updateDisplay();
    checkWin();
};

function checkGuess(letter) {
    var positions = [];

    for (var i = 0; i < words[currentWordIndex].length; i++) {
        if (words[cureentWordIndex][i] === letter) {
            positions.push(i);
        }
    }

    if (positions.length <= 0) {
        remainingGuesses--;
    }
    else {
        for (var i = 0; i < positions.length; i++) {
            secretWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if (secretWord.indexOf("_") === -1) {
        wins++;
        hasFinished = true;
    }
};