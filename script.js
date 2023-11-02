function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];

    const computerChoice = Math.floor(Math.random() * choices.length);

    return choices[computerChoice];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === 'rock'){
        if (computerSelection === 'rock'){
            console.log("It's a tie!, rock cancels rock");
            return 0;
        }

        if(computerSelection === 'scissors'){
            console.log("You win!, rock beats scissors");
            return 1;
        }

        console.log("You lose!, rock loses to paper");
        return -1;
    }
    else if(playerSelection.toLowerCase() === 'paper'){
        if (computerSelection === 'paper'){
            console.log("It's a tie!, paper cancels paper");
            return 0;
        }

        if (computerSelection === 'rock'){
            console.log("You win!, paper beats rock");
            return 1;
        }

       console.log("You lose!, paper loses to scissors");
       return -1;
    }
    else if(playerSelection.toLowerCase() === 'scissors'){
        if (computerSelection === 'scissors'){
            console.log("It's a tie!, scissors cancels scissors");
            return 0;
        } 

        if (computerSelection === 'paper'){
            console.log("You win!, scissors beat paper");
            return 1;
        } 

        console.log("You lose!, scissors lose to rock");
        return -1;
    }   
}

function game(){

    let playerScore = 0;
    let computerScore = 0;
    for(let i = 1; i <= 5; i++){
        let playerSelection = prompt('Enter your choice: ');
        let computerSelection = getComputerChoice();

        console.log(`ROUND ${i}`);
        console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}`);

        let result = playRound(playerSelection, computerSelection);

        (result > 0) ? playerScore += result : computerScore -= result;

        console.log('Player Score : ', playerScore);
        console.log('Computer Score : ', computerScore);
    }

    (playerScore > computerScore) ? console.log("YOU WIN!!!!") : console.log("Find something else to do TT");
}

console.log("It's a best of 5..... All the Best!");
console.log("Game starts in 5 seconds...")
console.log("------------------------------");
setTimeout(game, 5000);