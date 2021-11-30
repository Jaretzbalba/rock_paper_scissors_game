let comp = 0;

let user = 0;

function playRound() {

    let string = prompt('Enter your choice!'," ");

    const playerSelection = string.toLowerCase();

    const computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        console.log('It\'s a tie!');
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock');
        comp++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You Win! Rock beats Scissors');
        user++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You Win! Paper beats Rock');
        user++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You Lose! Scissors beats Paper');
        comp++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lose! Rock beats Scissors');
        comp++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You Win! Scissors beats Paper');
        user++;
    }
}