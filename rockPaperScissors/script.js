

function computerPlay(){
    let random = (Math.floor(Math.random() * 3));
    let choices = ["rock", "paper", "scissors"];
    let computer =  choices[random];
    return computer;
}

function playerPlay() {
    let btns = document.querySelectorAll("#options>button");
    btns.forEach((button) => {
        addEventListener('click', (e) =>{
            let output = (button.id);
            return output;
        })
    }
    )
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
            alert ("You win! " + player + " beats " + comp);
    }
    else if ((player == r && comp == p) ||
            (player == p && comp == s) ||
            (player == s && comp == r)) {
           alert ("You lose! " + comp + " beats " + player);
    }
    else if (player == comp) {
           alert ("It's a tie!");
    }
    else {
            alert ("Rock, Paper, Scissors only!");
    }  
}


function game(n) {
     n = parseInt(document.getElementById("rounds").value);
     for (let i = 0; i < n; i++){
        console.log(playerPlay());
    }
}




let playBtn = document.getElementById("btnRound");
playBtn.addEventListener('click', game)

