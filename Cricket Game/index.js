function bat(){
    let randomNumber = Math.random() * 3;
                let computerChoice;
                if (randomNumber > 0 && randomNumber <= 1) {
                    computerChoice = 'Bat';
                } else if (randomNumber > 1 && randomNumber <= 2) {
                    computerChoice = 'Ball';
                } else {
                    computerChoice = 'Wicket';
                }
                const computerChoiceMsg = '';
                let resultMsg;
                if (computerChoice === 'Ball') {
                    resultMsg = 'User won 🎉';
                } else if (computerChoice === 'Bat') {
                    resultMsg = `It's a tie 🤝`;
                } else if (computerChoice === 'Wicket') {
                    resultMsg = 'Computer won 😞';
                }
                alert(`You have chosen Bat. Computer choice is ${computerChoice} and ${resultMsg}`);
            
}
function ball(){
    const userChoiceMsg = '';
                let randomNumber = Math.random() * 3;
                let computerChoice;
                if (randomNumber > 0 && randomNumber <= 1) {
                    computerChoice = 'Bat';
                } else if (randomNumber > 1 && randomNumber <= 2) {
                    computerChoice = 'Ball';
                } else {
                    computerChoice = 'Wicket';
                }
                const computerChoiceMsg = '';
                let resultMsg;
                if (computerChoice === 'Ball') {
                    resultMsg = `It's a tie 🤝`;
                } else if (computerChoice === 'Bat') {
                    resultMsg = 'Computer won 😞';
                } else if (computerChoice === 'Wicket') {
                    resultMsg = 'User won 🎉';
                }
                alert(`You have chosen Ball. Computer choice is ${computerChoice} and ${resultMsg}`);
}
function wicket(){
    const userChoiceMsg = '';
    let randomNumber = Math.random() * 3;
    let computerChoice;
    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = 'Ball';
    } else {
        computerChoice = 'Wicket';
    }
    const computerChoiceMsg = '';
    let resultMsg;
    if (computerChoice === 'Wicket') {
        resultMsg = `It's a tie 🤝`;
    } else if (computerChoice === 'Bat') {
        resultMsg = 'User won 🎉';
    } else if (computerChoice === 'Ball') {
        resultMsg = 'Computer won 😞';
    }
    alert(`You have chosen Wicket. Computer choice is ${computerChoice} and ${resultMsg}`);
}