// Declare global scope variables
let playerScore = 0,
  computerScore = 0,
  gamePlaying,
  i = 0,
  results = document.querySelector(".displaySection");

// Generate computer turn
computerPlay = () => {
  num = Math.floor(Math.random() * 3);
  options = ["rock", "paper", "scissors"];
  computerSelection = options[num];
  return computerSelection;
};

// Function to play a single round and compare selections to determine a winner for the round
// Bonus feature: added rules to change the color of the button based on ruleset: If a tie, button goes yellow, if not it goes green for player selection and red for computer selection.

// Next thing that needs worked on: changing console.logs over to DOM methods.

playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay().toLowerCase();
  if (playerSelection === computerSelection) {
    choice.classList.toggle("yellow");
    setTimeout(() => choice.classList.toggle("yellow"), 1000);
    console.log(`Computer plays: ${computerSelection}`);
    console.log(
      `It's a tie ! The current score is: Player: ${playerScore} computer: ${computerScore}`
    );
  } else if (playerSelection === "rock") {
    rock.classList.toggle("green");
    setTimeout(() => rock.classList.toggle("green"), 1000);
    if (computerSelection === "scissors") {
      scissors.classList.toggle("red");
      setTimeout(() => scissors.classList.toggle("red"), 1000);
      playerScore++;
      console.log(`Computer plays: ${computerSelection}`);
      console.log(
        `You win ! Rock beats Scissors. The current score is: Player: ${playerScore} computer: ${computerScore}`
      );
    } else if (computerSelection === "paper") {
      paper.classList.toggle("red");
      setTimeout(() => paper.classList.toggle("red"), 1000);
      computerScore++;
      console.log(`Computer plays: ${computerSelection}`);
      console.log(
        `You lose ! Paper Beats Rock. The current score is: Player: ${playerScore} computer: ${computerScore}`
      );
    }
  } else if (playerSelection === "scissors") {
    scissors.classList.toggle("green");
    setTimeout(() => scissors.classList.toggle("green"), 1000);
    if (computerSelection === "paper") {
      paper.classList.toggle("red");
      setTimeout(() => paper.classList.toggle("red"), 1000);
      playerScore++;
      console.log(`Computer plays: ${computerSelection}`);
      console.log(
        `You win ! Scissors beats Paper. The current score is: Player: ${playerScore} computer: ${computerScore}`
      );
    } else if (computerSelection === "rock") {
      rock.classList.toggle("red");
      setTimeout(() => rock.classList.toggle("red"), 1000);
      computerScore++;
      console.log(`Computer plays: ${computerSelection}`);
      console.log(
        `You lose ! Rock beats Scissors. The current score is: Player: ${playerScore} computer: ${computerScore}`
      );
    }
  } else if (playerSelection === "paper") {
    paper.classList.toggle("green");
    setTimeout(() => paper.classList.toggle("green"), 1000);
    if (computerSelection === "rock") {
      rock.classList.toggle("red");
      setTimeout(() => rock.classList.toggle("red"), 1000);
      playerScore++;
      console.log(`Computer plays: ${computerSelection}`);
      console.log(
        `You win ! paper beats Rock. The current score is: Player: ${playerScore} computer: ${computerScore}`
      );
    } else if (computerSelection === "scissors") {
      scissors.classList.toggle("red");
      setTimeout(() => scissors.classList.toggle("red"), 1000);
      computerScore++;
      console.log(`Computer plays: ${computerSelection}`);
      console.log(
        `You lose ! Scissors beats Paper. The current score is: Player: ${playerScore} computer: ${computerScore}`
      );
    }
  }
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

const rock = document.querySelector(".btn_rock");
const paper = document.querySelector(".btn_paper");
const scissors = document.querySelector(".btn_scissors");

// Event listeners

rock.addEventListener("click", () => {
  choice = rock;
  playRound("Rock");
});
paper.addEventListener("click", () => {
  choice = paper;
  playRound("Paper");
});
scissors.addEventListener("click", () => {
  choice = scissors;
  playRound("Scissors");
});
