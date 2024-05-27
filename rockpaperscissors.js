//get computerChoice returns the computers random selection of rock, paper, or scissor
function getComputerChoice(choice) {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum == 1) {
        choice = "paper";
    }
    else if (randomNum == 2){
        choice = "rock";
    }
    else if (randomNum == 3){
        choice = "scissor";
    }
    return choice;
}

function playRound(humanChoice){

    let computerChoice = getComputerChoice();
    let results = '';  

    if(isAWinner){
        reset();
    }
    
    if(humanChoice === computerChoice) {
        results = "Nobody won!";        
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")){
        results = "You won the round!"   
        humanScore++;
    }
    else if ((humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors")) {
        results = "The computer won the round!"
        computerScore++;
    }
    
    if (humanScore >= 5){
        results = playerWinnerText;
        isAWinner = true;
    }
    else if (computerScore >= 5){
        results = computerWinnerText;
        isAWinner = true;
    }


    winnerText.textContent = results;
    humanScoreText.textContent = "Player: " + humanScore;
    computerScoreText.textContent = "Computer: " + computerScore;

}

function reset() {
    winnerText.textContent = "Round winner: none";

    humanScoreText.textContent = "Player: 0";
    computerScoreText.textContent = "Computer: 0";

    humanScore = 0;
    computerScore = 0;

    hasSomebodyWon = false;
}

    
    let humanScore = 0;
    let computerScore = 0;
    let isAWinner = false;
    const playerWinnerText = "Game winner! You won! Well done!";
    const computerWinnerText = "Game winner! You lost! Good try!";

    const rockButton = document.querySelector("#btnRock");
    const paperButton = document.querySelector("#btnPaper");
    const scissorsButton = document.querySelector("#btnScissors");
    const winnerText = document.querySelector("#winnerText");
    const humanScoreText = document.querySelector("#humanScore");
    const computerScoreText = document.querySelector("#computerScore");

   
    
    rockButton.addEventListener("click", function (e) {
        playRound("rock");
    });

    paperButton.addEventListener("click", function (e) {
        playRound("paper");
    });

    scissorsButton.addEventListener("click", function (e) {
        playRound("scissors");
    });




