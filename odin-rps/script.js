 function compareInputs(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;

    //tie
    if (pInput === cInput){
        alert(`${currentMatch} is a tie!`);
        return;
    }

    //rock
    if (pInput === 'Rock'){
        if (cInput === 'Scissors'){
            alert(`${currentMatch} = You win! `);
            pScore++;
        } else {
            alert(`${currentMatch} = Computer wins!`);
            cScore++
        }
    }

    //paper
    if (pInput === 'Paper'){
        if (cInput === 'Rock'){
            alert(`${currentMatch} = You win! `);
            pScore++;
        } else {
            alert(`${currentMatch} = Computer wins!`);
            cScore++
        }
    }

    //scissors
    if (pInput === 'Scissors'){
        if (cInput === 'Paper'){
            alert(`${currentMatch} = You win! `);
            pScore++;
        } else {
            alert(`${currentMatch} = Computer wins!`);
            cScore++
        }
    }

 }

 const options = document.querySelectorAll('.options');
 let pScore = 0;
 let cScore = 0;
 
 
 options.forEach((option) => {
    option.addEventListener("click", function () {
        const pInput = this.textContent;

        const cOptions = ['Rock', 'Paper', 'Scissors'];
        const cInput = cOptions[Math.floor(Math.random()* 3)];
      
        compareInputs(pInput, cInput);
        updateScore();
        if (checkWinner()) {
            pScore = cScore = 0;
            updateScore();
        }
    });
});

function updateScore() {
    document.getElementById('p-score').textContent = pScore;
    document.getElementById('c-score').textContent = cScore;
}


function checkWinner() {
    if (pScore === 5 || cScore === 5) {
        const winner =
        pScore === 5
        ? 'You win!!'
        : 'Computer wins! try again next time!'
        alert(winner);
        return true;
    }
    return false;
}