
function computerPlay(){
    let random = (Math.floor(Math.random() * 3));
    let choices = ["rock", "paper", "scissors"];
    let computer =  choices[random];
    return computer;
}

let btns = document.querySelectorAll("#options>button");
btns.forEach((button) => {
    addEventListener('click', event =>{
        if (event.target.nodeName == "BUTTON"){
        let output = (button.id);
        console.log(playRound(output, computerPlay()))
        } 
    })
}
);

    
  
function playRound(playerSelection, computerSelection){
    let player = playerSelection;
    let comp = computerSelection;
    let r = "rock";
    let p = "paper";
    let s = "scissors";
    let output;
    let score = "";
    
    if ((player == r && comp == s) ||
        (player == p && comp == r) ||
        (player == s && comp == p)) { 
             output = ("You win! " + player + " beats " + comp);
             score += "a";
    }
    else if ((player == r && comp == p) ||
            (player == p && comp == s) ||
            (player == s && comp == r)) {
            output = ("You lose! " + comp + " beats " + player);
            score += "b";
    }
    else if (player == comp) {
            output =  ("It's a tie!");
            score += "c";
    }
    else {
             output =  ("Rock, Paper, Scissors only!");
             score += "c";
    }  
    document.getElementById("result").innerHTML = output; 
    console.log(showScore(score))
}

