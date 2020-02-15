function computerPlay(){
    let random = (Math.floor(Math.random() * 3));
    let choices = ["rock", "paper", "scissors"];
    let computer = choices[random];
    return computer;
}

function playerPlay() {
    choose = prompt("Choose your weapon");
    playerChoice = toLowerCase(choose);
    return playerChoice;
    }
  


function playRound(playerSelection, computerSelection){
    playerSelection = playerPlay;
    computerSelection = computerPlay;
    let player = playerSelection;
    let comp = computerSelection;
    let r = "rock";
    let p = "paper";
    let s = "scissors";
    
    if ((player == r && comp == s) ||
        (player == p && comp == r) ||
        (player == s && comp == p)) { 
            console.log ("You win! " + player + " beats " + comp);
    }
    else if ((player == r && comp == p) ||
            (player == p && comp == s) ||
            (player == s && comp == r)) {
            console.log ("You lose! " + comp + " beats " + player);
    }
    else if (player == comp) {
            console.log ("It's a tie!");
    }
    else {
            console.log ("Rock, Paper, Scissors only!");
    }  
}


function game(n) {
     n = parseInt(document.getElementById("rounds").value);
     for (let i = 0; i < n; i++){
        console.log(computerPlay())
        console.log(playerPlay())
        console.log(playRound());
    }
}




let playBtn = document.getElementById("play");
playBtn.addEventListener('click', game)

