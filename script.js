let outcomes = Array("Rock", "Paper", "Scissors");

function computerPlay() {
    if (Math.floor(Math.random()*outcomes.length) === 0) {
        let outcome = outcomes[0];
        alert(outcomes[0]);
    }
    else if (Math.floor(Math.random()*outcomes.length) === 1) {
        let outcome = outcomes[1];
        alert(outcomes[1]);
    }
    else {
        let outcome = outcomes[2];
        alert(outcomes[2]);
    }
}