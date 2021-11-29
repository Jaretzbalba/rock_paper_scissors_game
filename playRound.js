function playRound() {

    const playerSelection = prompt('Enter your choice!'," ");

    const computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return result = 'It\'s a tie!';
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return result =  'You Lose! Paper beats Rock';
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return result = 'You Win! Rock beats Scissors';
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return result =  'You Win! Paper beats Rock';
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return result =  'You Lose! Scissors beats Paper';
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return result =  'You Lose! Rock beats Scissors';
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return result =  'You Win! Scissors beats Paper';
    }
}