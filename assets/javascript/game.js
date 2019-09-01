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

var attemptLimit = 6; //maximum number of tries
var lettersGuessed = []; //stores the letters already guessed
var secretWord; //index of the current word in the 'words'array
var wordGuess = []; //word built as player guesses pieces of secretWord correctly
var remainingGuesses = 0; //amount of tries remaining
var gameStarted = false; //flags the game when started
var gameFinish = false; //flag for restart game function
var wins = 0; //how many wins player has
var losses = 0; //how many losses player has

//Set up variables for the start of the game

function resetGame() {
    remainingGuesses = attempLimit;
    gameStarted = false;

    secretWord = Math.floor(Math.random() * (words.length));

    lettersGuessed = [];
    wordGuess = [];

    for (var i = 0; i < words[secretWord].length; i++) {
        wordGuess.push("_");
    }
    //document.getElementById(play - again).style.cssText = "display: none";
    //document.getElementById(hint).style.cssText = "display: none";
    //document.getElementById(you - win).style.cssText = "display: none";
    //document.getElementById(you - lose).style.cssText = "display: none";

    updateDisplay();
};

//Update the display on HTML page

function updateDisplay() {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("totalLosses").innerText = losses;

    var wordGuessText = "";
    for (var i = 0; i < wordGuess.length; i++) {
        wordGuessText += wordGuess[i];
    }
    document.getElementById("currentWord").innerText = wordGuessText;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("lettersGuessed").innerText = lettersGuessed;

};

   // if (remainingGuesses <= 0) {
      //  document.getElementById("you-lose").style.cssText = "display: block";
       // document.getElementById("play-again").style.cssText = "display: block";
     //   gameFinish = true;
   // }

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