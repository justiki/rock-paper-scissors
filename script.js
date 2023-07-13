// player makes a choice between rock, paper, and scissors
// The computer needs to select, rock, paper, or scissors
// it then needs to return that to the console
// a string then needs to be declared declaring the winner of the round

let choice = ["Rock", "Paper", "Scissors"]




function getComputerChoice(pull) {
    return choice[Math.floor(Math.random() * choice.length)]
}

function playRound (playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats rock";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You lose! Scissors beats paper!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lose! Rock beats Scissors!";
    }
    else if (playerSelection == computerSelection) {
        return "It's a draw! Go again!"
    }
    else {
        return "You win the game!"
    }
}

function game(){
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
}

const playerSelection = prompt();
const computerSelection = getComputerChoice();


console.log(getComputerChoice(choice))

