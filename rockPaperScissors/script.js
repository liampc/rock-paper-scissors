
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



function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let comp = computerSelection.toLowerCase();
    let r = "rock";
    let p = "paper";
    let s = "scissors";

    if 
       ((player == r && comp == p) ||
       (player == p && comp == s) ||
       (player == s && comp == r)) {
         return("You Lose! " + comp + " beats " + player);
       }  
    else if 
       ((player == r && comp == s) ||
       (player == p && comp == r) ||
       (player == s && comp == p )) 
       {
         return("You Win! " + player + " beats " + comp);
       }  
    else if (player == comp) {
        return ("Samesies! Try Again");
    }
    else {
        return ("Rock, Paper, Scissors only!");
    }
}


const playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

