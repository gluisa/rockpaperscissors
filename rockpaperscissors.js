//get computerChoice returns the computers random selection of rock, paper, or scissor
function getComputerChoice(computerChoice) {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum == 1) {
        computerChoice = "paper"
    }
    else if (randomNum == 2){
        computerChoice = "rock"
    }
    else if (randomNum == 3){
        computerChoice = "scissor"
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playGame();

function playGame(){
    
    let humanScore = 0;
    let computerScore = 0;
    let numGames = 0;

    playRound(humanSelection, computerSelection)  

/*
    while (numGames <= 4){
        getHumanChoice()
        getComputerChoice()
        playRound(humanSelection, computerSelection)  
    }
    
*/
    function playRound(humanSelection, computerSelection){

        
    
        if(humanSelection=="rock" && computerSelection=="rock" || humanSelection=="paper" && computerSelection=="paper" || humanSelection=="scissor" && computerSelection=="scissor") {
            numGames++;
            console.log("Nobody won! " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore)
        }
        else if (humanSelection == "rock" && computerSelection == "scissor") {
            humanScore++;
            numGames++;
            console.log("You won! Rock beats scissor" + " " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore)      
        }
        else if (humanSelection == "scissor" && computerSelection == "paper") {
            humanScore++;
            numGames++;
            console.log("You won! Scissor beats paper" +  " " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore)
    
        }
        else if (humanSelection == "paper" && computerSelection == "rock") {
            humanScore++;
            numGames++;
            console.log("You won! Paper beats rock" +  " " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore)          
    
        }
        else if (humanSelection == "scissor" && computerSelection == "rock" ) {
            humanScore--;
            numGames++;
            console.log("You lost! Scissor loses to rock" +  " " + "Your score: " + humanScore  + " " + "Computer Score: " + computerScore)

        }
        else if (humanSelection == "rock" && computerSelection == "paper" ) {
            humanScore--;
            numGames++;
            console.log("You lost! Rock loses to paper" +  " " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore)
    
        }
        else if(humanSelection == "paper" && computerSelection == "scissor"){
            humanScore--;
            numGames++;
            return console.log("You lost! Paper loses to scissor" +  " " + "Your score: " + humanScore + " "+ "Computer Score: " + computerScore)         
        }
    }
    

}




