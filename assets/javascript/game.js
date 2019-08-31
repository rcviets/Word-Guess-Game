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
document.getElementById(play-again).style.cssText = "display: none";
document.getElementById(hint).style.cssText = "display: none";
document.getElementById(you-win).style.cssText = "display: none";
document.getElementById(you-lose).style.cssText = "display: none";

updateDisplay();

};

