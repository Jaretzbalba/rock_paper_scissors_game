function game() {

    let rounds = prompt('How many rounds would you like to play?', ' ');
    let majority_win = majority(rounds);

    alert(`The first to ${majority_win} wins or the most is the Rock, Papper, Scissors Champion!`);

    for (i=0; i<rounds; i++) {
    console.log(playRound());
        if (user === majority_win) {
        return console.log('You are the Champion!');
        } else if (comp === majority_win) {
        return console.log('You Lose! Better luck next time!'); 
        } else {  
        }
    }

    if (user > comp) {
    console.log('You are the Champion!');
    } else if (user < comp) {
    console.log('You Lose! Better luck next time!'); 
    } else if (user === comp) {
    console.log(`It\'s a Tie! C'mon you can't beat a robot?`);
    }

}