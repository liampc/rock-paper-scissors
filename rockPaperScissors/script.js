
function computerPlay(){
    let random = (Math.floor(Math.random() * 4));
    switch (random) {
        case 1 :
            return("rock")
        break;
        case 2 :
            return("paper")
        break;
        case 3 :
            return("scissors")
        break;
    }
}

function playerPlay() {
    let player = document.querySelectorAll("#option>.choices");
    console.log (player.toLowerCase());
}


function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    let player = playerSelection;
    let comp = computerSelection;
    let r = "rock";
    let p = "paper";
    let s = "scissors";
    
    if ((player == r && comp == s) ||
        (player == p && comp == r) ||
        (player == s && comp == p)) { 
        alert("You win! " + player + " beats " + comp);
    }
    else if ((player == r && comp == p) ||
            (player == p && comp == s) ||
            (player == s && comp == r)) {
        alert("You lose! " + comp + " beats " + player);
    }
    else if (player == comp) {
        alert("It's a tie!");
    }
    else {
        alert("Rock, Paper, Scissors only!");
    }  
}


function game(n) {
     n = parseInt(document.getElementById("rounds").value);
     for (let i = 0; i < n; i++){
        console.log(playRound());
    }
}




let playBtn = document.getElementById("play");
playBtn.addEventListener('click', game)


