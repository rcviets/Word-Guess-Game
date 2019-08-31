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
var wrongGuesses = 0;
var limit = 6;
var playing = false;

function play () {

    var currentWord = words[Math.floor(Math.random() * words.length)];
}


var answerArray = [];
for (var i = 0; i < currentWord.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = currentWord.length;

while (remainingLetters > 0);
