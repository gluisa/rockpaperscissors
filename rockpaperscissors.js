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



function playGame(humanChoice, computerChoice){

    

    let computerChoice = getComputerChoice();
    let humanScore = 0;
    let computerScore = 0;
    

    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    document.body.appendChild(rockBtn);
    rockBtn.addEventListener('click', () => {
        playRound("rock", computerChoice);
    });


    const paperBtn = document.createElement('button');
    paperBtn.textContent = "Paper";
    document.body.appendChild(paperBtn);
    paperBtn.addEventListener('click', () => {
        humanChoice = "paper";
        playRound(humanChoice, computerChoice);
    });


    const scissorBtn = document.createElement('button');
    scissorBtn.textContent = "Scissor";
    document.body.appendChild(scissorBtn);
    scissorBtn.addEventListener('click', () => {
        humanChoice = "scissor";
        playRound(humanChoice, computerChoice);
    });
 

  /*  while (humanScore < 5 || computerScore < 5) {
       
    }

  */
    
    function playRound(humanChoice, computerChoice){

            const results = document.createElement('div'); //need to move so it is accessible to final score results
            if(humanChoice === computerChoice) {
                document.body.appendChild(results);
                return results.textContent = "Nobody won! " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore;     
            }
            else if (humanChoice == "rock" && computerChoice == "scissor") {
                document.body.appendChild(results);
                humanScore++;
                return results.textContent = "You won! Rock beats scissor" + " " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore;     
            }
            else if (humanChoice == "scissor" && computerChoice == "paper") {
                document.body.appendChild(results);
                humanScore++;
                return results.textContent = "You won! Scissor beats paper" +  " " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore;
        
            }
            else if (humanChoice == "paper" && computerChoice == "rock") {
                document.body.appendChild(results);
                humanScore++;
                return results.textContent = "You won! Paper beats rock" +  " " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore;         
        
            }
            else if (humanChoice == "scissor" && computerChoice == "rock" ) {
                document.body.appendChild(results);
                computerScore++;
                return results.textContent = "You lost! Scissor loses to rock" +  " " + "Your score: " + humanScore  + " " + "Computer Score: " + computerScore;
    
            }
            else if (humanChoice == "rock" && computerChoice == "paper" ) {
                document.body.appendChild(results);
                computerScore++;
                return results.textContent = "You lost! Rock loses to paper" +  " " + "Your score: " + humanScore +  " " + "Computer Score: " + computerScore;
        
            }
            else if(humanChoice == "paper" && computerChoice == "scissor"){
                document.body.appendChild(results);
                computerScore++;
                return results.textContent = "You lost! Paper loses to scissor" +  " " + "Your score: " + humanScore + " "+ "Computer Score: " + computerScore;         
            }
        }

        const finalResults = document.createElement("div");
        
        if (humanScore === 5 || computerScore === 5){
            if (computerScore == humanScore) {
                document.body.appendChild(finalResults);
                return finalResults.textContent = "It's a tie! FINAL- Your score: " + humanScore +  " " + "Computer Score: " + computerScore;
            }
            else if (computerScore > humanScore){
                document.body.appendChild(finalResults);
                return finalResults.textContent = "You LOSTTT!!! The computer won! FINAL- Your score: " + humanScore +  " " + "Computer Score: " + computerScore;
            }
            else if (humanScore > computerScore) {
                document.body.appendChild(finalResults);
                return finalResults.textContent = "You WONNN!! SLAY!! FINAL- Your score: " + humanScore +  " " + "Computer Score: " + computerScore;
            }

    }
        
    

}

playGame();




