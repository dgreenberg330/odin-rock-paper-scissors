playGame();

function playGame(){
    //plays 5 rounds and outputs score after each round.
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`The Score is:
            Computer: ${computerScore}
            Human: ${humanScore}`);
    }

    function playRound(humanChoice, computerChoice){
    //Evaluates human choice vs computer choice. Increments score based on winner
        if (humanChoice === "rock"){
            if (computerChoice === "paper"){
                console.log("You lose! Paper beats Rock.");
                computerScore++;
            }
            else if (computerChoice === "scissors"){
                console.log("You win! Rock beats Scissors.");
                humanScore++;
            }
            else{
                console.log("Tie game. Computer plays Rock.");
            }
        }
        else if (humanChoice === "paper"){
            if (computerChoice === "scissors"){
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
            }
            else if (computerChoice === "rock"){
                console.log("You win! Paper beats Rock.");
                humanScore++;
            }
            else{
                console.log("Tie game. Computer plays Paper.");
            }
        }
        else {
            if (computerChoice === "rock"){
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
            }
            else if (computerChoice === "paper"){
                console.log("You win! Scissors beats Paper.");
                humanScore++;
            }
            else{
                console.log("Tie game. Computer plays Scissors.");
            }
        }
    }
}

function getComputerChoice(){
    //Randomly generates "Rock","Paper", or "Scissors." Equal chance for each.
    let randomNum = Math.random();
    let computerChoice;
    if (randomNum < (1/3)){
        computerChoice = "rock";
    }
    else if (randomNum < (2/3)){
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    //Prompts user for their choice
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}

