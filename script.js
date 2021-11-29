let comp_result;

function computerPlay() {
    if (Math.random()<.333) {
        let comp_result = 'Rock'
    }
    else if (Math.random()>.333 && Math.random()<.666) {
        let comp_result = 'Paper'
    }
    else if (Math.random()>.666) {
        let comp_result = 'Scissors'
    }
}

computerPlay();

alert(comp_result);