

function computerPlay(){
    let random = parseInt((Math.random() * 3) + 1);
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

<<<<<<< HEAD
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
    let player = prompt("Choose Rock, Paper or Scissors");
    return (player.toLowerCase());
=======
function playerPlay() {
    let player = prompt("Choose Rock, Paper or Scissors");
    return player.toLowerCase();
>>>>>>> working
}


function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    let player = playerSelection;
    let comp = computerSelection;
    let r = "rock";
    let p = "paper";
    let s = "scissors";
    
<<<<<<< HEAD
    
=======
>>>>>>> working
    if (
        (player == r && comp == s) ||
        (player == p && comp == r) ||
        (player == s && comp == p)
        ) { 
<<<<<<< HEAD
            return ("You win! " + player + " beats " + comp);

=======
           
            return ("You win! " + player + " beats " + comp);
>>>>>>> working
            }
    else if (
        (player == r && comp == p) ||
        (player == p && comp == s) ||
        (player == s && comp == r)
        ) {
<<<<<<< HEAD
            return ("You lose! " + comp + " beats " + player);
        }
    else if (player == comp) {
        result = "It's a tie!";
            return result;
    }
    else {
=======
           
            return ("You lose! " + comp + " beats " + player);
        }
    else if (player == comp) {
    
        return ("It's a tie!")
    }
    else {
        
>>>>>>> working
        return ("Rock, Paper, Scissors only!")
    }
    
}


<<<<<<< HEAD
function game(n) {
    n = prompt("How many games");
    for (let i = 0; i < n; i++){
        console.log(playRound());
    }
}


=======
function game() {
    for (let i = 0; i < 5; i++){
        console.log(playRound());
    }
    alert("Game over")
}

>>>>>>> working
console.log(game());

