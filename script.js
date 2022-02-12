// Declare global scope variables
let playerScore = 0,
    computerScore = 0,
    gamePlaying = true,
    i = 0,
    results = document.querySelector(".displaySection");

// Reset component after winner is announced
reset = () => {
    playerScore = 0
    computerScore = 0
    // Remove innerHTML from winner anouncement DOM method
};    

// Generate computer turn
computerPlay = () => {
    num = Math.floor(Math.random() * 3);
    options = ["rock", "paper", "scissors"];
    computerSelection = options[num];
    return computerSelection;
};

// Set Scores
function setScore() {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

//

// Function to play a single round and compare selections to determine a winner for the round
playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection === computerSelection) {
        choice.classList.toggle("yellow");
        setTimeout(() => choice.classList.toggle("yellow"), 1000);
    } else if (playerSelection === "rock") {
        rock.classList.toggle("green");
        setTimeout(() => rock.classList.toggle("green"), 1000);
        if (computerSelection === "scissors") {
            scissors.classList.toggle("red");
            setTimeout(() => scissors.classList.toggle("red"), 1000);
            playerScore++;
        } else if (computerSelection === "paper") {
            paper.classList.toggle("red");
            setTimeout(() => paper.classList.toggle("red"), 1000);
            computerScore++;
        }
    } else if (playerSelection === "scissors") {
        scissors.classList.toggle("green");
        setTimeout(() => scissors.classList.toggle("green"), 1000);
        if (computerSelection === "paper") {
            paper.classList.toggle("red");
            setTimeout(() => paper.classList.toggle("red"), 1000);
            playerScore++;
        } else if (computerSelection === "rock") {
            rock.classList.toggle("red");
            setTimeout(() => rock.classList.toggle("red"), 1000);
            computerScore++;
        }
    } else if (playerSelection === "paper") {
        paper.classList.toggle("green");
        setTimeout(() => paper.classList.toggle("green"), 1000);
        if (computerSelection === "rock") {
            rock.classList.toggle("red");
            setTimeout(() => rock.classList.toggle("red"), 1000);
            playerScore++;
        } else if (computerSelection === "scissors") {
            scissors.classList.toggle("red");
            setTimeout(() => scissors.classList.toggle("red"), 1000);
            computerScore++;
        }
    }
    setScore();
    if (playerScore == 5) {
        document.getElementById("winner").innerHTML = `You won !`
        reset();
    } else if (computerScore == 5) {
        document.getElementById("winner").innerHTML = `You lost to the computer !`
        reset();
    }
};

// Winner Announcement


// ----DOM Section----
const rock = document.querySelector(".btn_rock");
const paper = document.querySelector(".btn_paper");
const scissors = document.querySelector(".btn_scissors");

// Event listeners and buttons
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
