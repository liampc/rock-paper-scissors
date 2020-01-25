
function computerPlay(){
    let random = parseInt((Math.random() * 3) + 1);
    switch (random) {
        case 1 :
            return("Rock")
        break;
        case 2 :
            return("Paper")
        break;
        case 3 :
            return("Scissors")
        break;
    }
}

function playRound(playerSelection, computerSelection) {
    let comp = computerSelection;

 if (comp == "Paper" || "paper" || "PAPER") { 
     return ("You Lose! Paper beats Rock");
 } else if (comp == "Scissors" || "scissors" || "SCISSORS") {
     return ("You Win! Rock beats Scissors");
 }else if (comp == "Rock" || "rock" || "ROCK") {
     return ("Samesies! Try Again");
 }
}

const playerSelection = "rock" 
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))

