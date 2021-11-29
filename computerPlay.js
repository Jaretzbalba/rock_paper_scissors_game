let outcomes = Array("Rock", "Paper", "Scissors");

let outcome;

function computerPlay() {
    if (Math.floor(Math.random()*outcomes.length) === 0) {
        return outcome = outcomes[0]
    }
    else if (Math.floor(Math.random()*outcomes.length) === 1) {
        return outcome = outcomes[1]
    }
    else {
        return outcome = outcomes[2]
    }
}