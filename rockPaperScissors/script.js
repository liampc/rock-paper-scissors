
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

    if 
       ((player == "rock" && comp =="paper") ||
       (player == "paper" && comp =="scissors") ||
       (player == "scissors" && comp == "rock")) {
         return("You Lose! " + comp + " beats " + player);
       }  
    else if 
       ((player == "rock" && comp =="scissors") ||
       (player == "paper" && comp =="rock") ||
       (player == "scissors" && comp == "paper")) 
       {
         return("You Win! " + player + " beats " + comp);
       }  
    else if (player == comp) {
        return ("Samesies! Try Again");
    }
}


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

