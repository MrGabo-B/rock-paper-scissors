const weapons = ['paper', 'rock', 'scissors']
let playerScore = 0, computerScore = 0;
let resultado = document.getElementById('result');
let player = document.getElementById('player-score')
let computer = document.getElementById('computer-score')
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const computer = getRandomInt(weapons.length);
    return weapons[computer];
}
function updateScore() {
    player.innerText = playerScore;
    computer.innerText = computerScore;
    disableButtons();
}
function disableButtons() {
    if (playerScore >= 5 || computerScore >= 5) {
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        // if (playerScore === 5) {
        //     alert('Player ha ganado')
        // } else alert('Computer ha ganado')
        setTimeout(winner, 500)
    }
}
function winner() {
    playerScore === 5 ? alert('Player ha ganado') : alert('Computer ha ganado')
}
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        resultado.innerText = "It's a tie";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        resultado.innerText = "Rock beats scissors";
        playerSelection === 'rock' ? playerScore++ : computerScore++;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
        resultado.innerText = "Paper beats rock";
        playerSelection === 'paper' ? playerScore++ : computerScore++;
    } else if ((playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
        resultado.innerText = "Scissors beat paper";
        playerSelection === 'scissors' ? playerScore++ : computerScore++;
    }
    updateScore();

}
