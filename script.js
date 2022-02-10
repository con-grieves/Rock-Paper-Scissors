// Declare global scope variables
let playerScore = 0,
  computerScore = 0,
  gamePlaying,
  i = 0,
  results = document.querySelector(".displaySection");

if (cookieExistCheck() == 1){
  playerScore = cookieSetVar("playerScore=")
  computerScore = cookieSetVar("computerScore=")
}
else 
{
  cookieUpdate("playerScore", playerScore);
  cookieUpdate("computerScore", computerScore);
}

//Set Score
document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;

// Generate computer turn
computerPlay = () => {
  num = Math.floor(Math.random() * 3);
  options = ["rock", "paper", "scissors"];
  computerSelection = options[num];
  return computerSelection; // Return stores the the value of computerSelection to the caller function. Meaning if we call computerPlay later we get this value.
};

//Cookies Functions

//Check Cookie exists
function cookieExistCheck(){
  if (document.cookie.split(';').some((item) => item.trim().startsWith('playerScore='))) {
  return 1;
  }
  else {
    return 0;
  }
  }

//Set Var to Cookie
function cookieSetVar(varname) {
    x = document.cookie
    .split('; ')
    .find(row => row.startsWith(varname))
    .split('=')[1];
    console.log(varname, x);
    return x;
}

//Update Cookies
function cookieUpdate(cookieVarName, cookieVarData) {
  document.cookie = cookieVarName + "=" + cookieVarData + ";SameSite=Strict";
  return null;   // The function updates the score cookies
}
// Function to play a single round and compare selections to determine a winner for the round
// Bonus feature: add rules to change the color of the button based on ruleset: If a tie, button goes yellow, if not it goes green for player selection and red for computer selection.

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
  cookieUpdate("playerScore", playerScore);
  cookieUpdate("computerScore", computerScore);
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
 //console.log(document.cookie);
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

// Event listeners to toggle the background color of the buttons and reset them after a certain time aswell as run the playRound function

rock.addEventListener("click", () => {
  choice = rock;
  playRound("Rock");
  // if (playerSelection != computerSelection) {
  //     rock.classList.toggle('green');
  //     setTimeout(() => rock.classList.toggle('green'), 1000)
  // };
});
paper.addEventListener("click", () => {
  choice = paper;
  playRound("Paper");
  // paper.classList.toggle('green');
  // setTimeout(() => paper.classList.toggle('green'), 1000)
});
scissors.addEventListener("click", () => {
  choice = scissors;
  playRound("Scissors");
  // scissors.classList.toggle('green');
  // setTimeout(() => scissors.classList.toggle('green'), 1000)
});
