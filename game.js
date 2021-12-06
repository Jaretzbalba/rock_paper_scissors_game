function game() {

    let winAmount = prompt('How many wins to be the Champion?', '5');

    let i = 0; 

    while (user < winAmount && comp < winAmount) {
        (playRound());
        if (user == winAmount) {
            console.log("You are the Champion!");
            } else if (comp == winAmount) {
            console.log("You Lose! Better luck next time!"); 
            }
        }
    i++;
}