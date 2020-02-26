
function computerPlay(){
    let random = (Math.floor(Math.random() * 3));
    let choices = ["rock", "paper", "scissors"];
    let computer =  choices[random];
    return computer;
}

let imgs = document.querySelectorAll("#options>img");
imgs.forEach((img) => {
    addEventListener('click', event =>{
        if (event.target.nodeName == "IMG"){
        let output = (img.id);
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
    
    
    if ((player == r && comp == s) ||
        (player == p && comp == r) ||
        (player == s && comp == p)) { 
             output = ("You win! " + player + " beats " + comp);
             
    }
    else if ((player == r && comp == p) ||
            (player == p && comp == s) ||
            (player == s && comp == r)) {
            output = ("You lose! " + comp + " beats " + player);
            
    }
    else if (player == comp) {
            output =  ("It's a tie!");
            
    }
    else {
             output =  ("Rock, Paper, Scissors only!");
             
    }  
    document.getElementById("result").innerHTML = output; 
    
}
