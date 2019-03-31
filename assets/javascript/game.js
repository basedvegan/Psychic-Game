var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("computer guess:", computerGuess);

var wins = 0;
var losses = 0;
var numberOfGuesses = 9;
var choices = [];

document.onkeyup = function (event) {

    var userGuess = event.key;
    console.log("player guess:", userGuess);
    //below: randomizes computer guess


    if (userGuess === computerGuess) {
        wins++;
        numberOfGuesses = 9; //resets guesses to 9 if win
        userGuess = "";
        choices = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("computer new guess after win:", computerGuess);

    } else {
        numberOfGuesses--;
        choices.push(userGuess);
    }

    if (numberOfGuesses === 0) {

        numberOfGuesses = 9;
        losses++;
        choices = [];
        
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("computer new guess after loss:", computerGuess);


    }




    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesleft").innerHTML = numberOfGuesses;
    document.getElementById("guessessofar").innerHTML = choices;





};


