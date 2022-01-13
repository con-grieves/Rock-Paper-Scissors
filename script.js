// Declare global scope variables
let playerScore = 0,
    computerScore = 0,
    gamePlaying,
    i = 0;    

// Generate computer turn
computerPlay = () => {
    num = Math.floor(Math.random() * 2);
    options = ["rock", "paper", "scissors"];
    computerSelection = options[num];
    return computerSelection  // Return stores the the value of computerSelection to the caller function. Meaning if we call computerPlay later we get this value.
}

// Function to play a single round and compare selections to determine a winner for the round
playRound = (playerSelection, computerSelection) => {

    playerSelection = prompt("Choose between Rock, Paper or Scissors").toLowerCase();
    computerSelection = computerPlay().toLowerCase();

    if (playerSelection === computerSelection) {
        console.log(`It's a tie ! The current score is: Player: ${playerScore} computer: ${computerScore}`)
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++
            console.log(`You win ! Rock beats Scissors. The current score is: Player: ${playerScore} computer: ${computerScore}`);
        } else if (computerSelection === "paper") {
            computerScore++
            console.log(`You lose ! Paper Beats Rock. The current score is: Player: ${playerScore} computer: ${computerScore}`);
        }; 
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++
            console.log(`You win ! Scissors beats Paper. The current score is: Player: ${playerScore} computer: ${computerScore}`);
        } else if (computerSelection === "rock") {
            computerScore++
            console.log(`You lose ! Rock beats Scissors. The current score is: Player: ${playerScore} computer: ${computerScore}`);
        };
    } else (playerSelection === "paper") 
    {
        if (computerSelection === "rock") {
            playerScore++
            console.log(`You win ! paper beats Rock. The current score is: Player: ${playerScore} computer: ${computerScore}`);
        } else if (computerSelection === "scissors") {
            computerScore++
            console.log(`You lose ! Scissors beats Paper. The current score is: Player: ${playerScore} computer: ${computerScore}`);
        };
    };    
};

// Function to play 5 rounds, add up scores and display the winner at the end.
game = () => {
    while (i < 5) {
        i++
        playRound();
    };

    scores = `Player = ${playerScore}, Computer = ${computerScore}.`

    if (playerScore == computerScore) {
        console.log(`How on earth did this happen, this should be impossible !`)
    } else if (playerScore > computerScore) {
        console.log(`GAME OVER. You are the winner ! The ending score was ${scores}`)
    } else if (computerScore > playerScore) {
        console.log(`GAME OVER. You lost ! The ending score was ${scores}`)
    }
}

game();