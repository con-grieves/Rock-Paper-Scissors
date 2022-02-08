// Declare global scope variables
let playerScore = 0,
    computerScore = 0,
    gamePlaying,
    i = 0,
    results = document.querySelector('.displaySection')    

// Generate computer turn
computerPlay = () => {
    num = Math.floor(Math.random() * 3);
    options = ["rock", "paper", "scissors"];
    computerSelection = options[num];
    return computerSelection  // Return stores the the value of computerSelection to the caller function. Meaning if we call computerPlay later we get this value.
}

// Function to play a single round and compare selections to determine a winner for the round
playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection === computerSelection) {
        console.log(`Computer plays: ${computerSelection}`);
        console.log(`It's a tie ! The current score is: Player: ${playerScore} computer: ${computerScore}`)
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++
            console.log(`Computer plays: ${computerSelection}`);
            console.log(`You win ! Rock beats Scissors. The current score is: Player: ${playerScore} computer: ${computerScore}`);
        } else if (computerSelection === "paper") {
            computerScore++
            console.log(`Computer plays: ${computerSelection}`);
            console.log(`You lose ! Paper Beats Rock. The current score is: Player: ${playerScore} computer: ${computerScore}`);
        }; 
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++
            console.log(`Computer plays: ${computerSelection}`);
            console.log(`You win ! Scissors beats Paper. The current score is: Player: ${playerScore} computer: ${computerScore}`);
        } else if (computerSelection === "rock") {
            computerScore++
            console.log(`Computer plays: ${computerSelection}`);
            console.log(`You lose ! Rock beats Scissors. The current score is: Player: ${playerScore} computer: ${computerScore}`);
        };
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++
            console.log(`Computer plays: ${computerSelection}`);
            console.log(`You win ! paper beats Rock. The current score is: Player: ${playerScore} computer: ${computerScore}`);
        } else if (computerSelection === "scissors") {
            computerScore++
            console.log(`Computer plays: ${computerSelection}`);
            console.log(`You lose ! Scissors beats Paper. The current score is: Player: ${playerScore} computer: ${computerScore}`);
        };
    };    
};

// Function to play 5 rounds, add up scores and display the winner at the end. 
// ---- Commenting out for now as this functionality is not needed pending changes to be made adding in a UI ----
// game = () => {
//     while (i < 5) {
//         i++
//         playRound();
//     };

//     scores = `Player = ${playerScore}, Computer = ${computerScore}.`

//     if (playerScore == computerScore) {
//         alert(`GAME OVER. It was a tie, the ending score was ${scores}`)
//     } else if (playerScore > computerScore) {
//         alert(`GAME OVER. You are the winner ! The ending score was ${scores}`)
//     } else if (computerScore > playerScore) {
//         alert(`GAME OVER. You lost ! The ending score was ${scores}`)
//     }
// }

// ----DOM Section----

const rock = document.querySelector('.btn_rock')
const paper = document.querySelector('.btn_paper')
const scissors = document.querySelector('.btn_scissors')

// Event listeners to toggle the background color of the buttons and reset them after a certain time aswell as run the playRound function

rock.addEventListener('click',() => {
    playRound('Rock',);
    rock.classList.toggle('green');
    setTimeout(() => rock.classList.toggle('green'), 1000)
});
paper.addEventListener('click',() => {
    playRound('Paper',);
    paper.classList.toggle('green');
    setTimeout(() => paper.classList.toggle('green'), 1000)
})
scissors.addEventListener('click',() => {
    playRound('Scissors',);
    scissors.classList.toggle('green');
    setTimeout(() => scissors.classList.toggle('green'), 1000)
})

