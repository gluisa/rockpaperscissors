//get computerChoice returns the computers random selection of rock, paper, or scissor
function getComputerChoice(computerChoice) {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum == 1) {
        computerChoice = "paper";
    }
    else if (randomNum == 2){
        computerChoice = "rock";
    }
    else if (randomNum == 3){
        computerChoice = "scissor";
    }
    return computerChoice;
}

//get humanChoice returns the humans selection of rock paper or scissor

function getHumanChoice(humanChoice)
    {
        humanChoice = prompt("Rock, paper, or scissor?");
        humanChoice = humanChoice.toLowerCase();
        return humanChoice;
    }
//get

function playGame(humanChoice, computerChoice){
    
    
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
        {
            const humanChoice = getHumanChoice();
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
       }

    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice) {
            console.log("Nobody won! " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore);
        }
        else if (humanChoice == "rock" && computerChoice == "scissor") {
            humanScore++;
            console.log("You won! Rock beats scissor" + " " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore);     
        }
        else if (humanChoice == "scissor" && computerChoice == "paper") {
            humanScore++;
            console.log("You won! Scissor beats paper" +  " " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore);
    
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log("You won! Paper beats rock" +  " " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore);         
    
        }
        else if (humanChoice == "scissor" && computerChoice == "rock" ) {
            computerScore++;
            console.log("You lost! Scissor loses to rock" +  " " + "Your score: " + humanScore  + " " + "Computer Score: " + computerScore);

        }
        else if (humanChoice == "rock" && computerChoice == "paper" ) {
            computerScore++;
            console.log("You lost! Rock loses to paper" +  " " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore);
    
        }
        else if(humanChoice == "paper" && computerChoice == "scissor"){
            computerScore++;
            return console.log("You lost! Paper loses to scissor" +  " " + "Your score: " + humanScore + " "+ "Computer Score: " + computerScore);         
        }
    }

    
    if (computerScore == humanScore) {
        console.log("It's a tie! FINAL- Your score: " + humanScore +  " " + "Computer Score: " + computerScore);
    }
    else if (computerScore > humanScore){
        console.log("You LOSTTT!!! The computer won! FINAL- Your score: " + humanScore +  " " + "Computer Score: " + computerScore);
    }
    else if (humanScore > computerScore) {
        console.log ("You WONNN!! SLAY!! FINAL- Your score: " + humanScore +  " " + "Computer Score: " + computerScore);
    }

}
playGame();




