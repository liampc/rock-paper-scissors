
function showRounds(totalRounds, currentRound){
    totalRounds = parseInt(document.getElementById("rounds").value);
    currentRound = 0;
    let output = ("Game " + currentRound + " of " + totalRounds);
    document.getElementById("gameStatus").innerHTML = output;
}

function showScore(compScore, playerScore){
    compScore = 0;
    playerScore = 0;
    let output = ("Score: Player - " + playerScore + " Computer - " + compScore);
    document.getElementById("gameScore").innerHTML = output;
}

function playerPlay(){
    let choices = document.querySelectorAll("#options>button"); 
        switch (choices) {
            case "#rock" :
                alert("rock") 
                break;
            case "#paper" :
                alert("paper")
                break;
            case "#scissors" :
                alert("scissors")
                break; 
        }
   
}

let roundBtn = document.getElementById("btnPlay");
roundBtn.addEventListener("click", showRounds);
roundBtn.addEventListener("click", showScore);
roundBtn.addEventListener("click", playerPlay);

