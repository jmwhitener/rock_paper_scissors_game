
//DOM Methods for storing the scores 
let playerScore = 0;
let computerScore = 0; 

//sets the player and computer score 
function setScore(){ 

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore; 

    if(playerScore === 5){ 
        console.log("Yay! You win!");  
        document.getElementById("winner").textContent = "Yay! You win!";  
        //resets the scores
        playerScore = 0; 
        computerScore = 0;  
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("computerScore").textContent = computerScore; 
        
    }else if(computerScore === 5){ 
        console.log("Sorry! You Lose!"); 
        document.getElementById("winner").textContent = "Sorry! You lose!";  
        //resets the scores 
        playerScore = 0; 
        computerScore = 0; 
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("computerScore").textContent = computerScore; 
        
    } 
    
} 

//Button Event Listeners 
document.getElementById("rock").addEventListener("click", function(){ 

    console.log(playRound("rock", computerPlay()));   
    setScore(playerScore, computerScore); 
    return;    

}); 

document.getElementById("paper").addEventListener("click", function(){ 

    console.log(playRound("paper", computerPlay()));   
    setScore(playerScore, computerScore); 
    return;

}); 

document.getElementById("scissors").addEventListener("click", function(){ 

    console.log(playRound("scissors", computerPlay()));  
    setScore(playerScore, computerScore); 
    return;

});



//A function to randomly select rock, paper ,or scissors for the computer's turn
function computerPlay(){ 

    //Holds the values that the computer selects from at random
    let computerArray = ['Rock', 'Paper', 'Scissors']; 

    //Holds the randomly selected value from computerArray 
    let computerSelection = computerArray[Math.floor(Math.random() * computerArray.length)]; 

    //Returns the computer selection
    return computerSelection;

} 

//Calls the function computerPlay and uses the return value to play against the player
function playRound(playerSelection, computerSelection) {
    
    //Variables to hold the win, lose, and tie messages
    let winStr = "You Win! " + computerSelection + ' ' + "loses to " + playerSelection; 
    let loseStr = "You Lose! " + computerSelection + ' ' + "beats " + playerSelection;
    let tieStr = "It's a Tie! " + computerSelection + ' ' + "ties " + playerSelection;

    //Variables to convert the selections to lowercase so it can be case insensitive 
    let playerSel = playerSelection.toLowerCase(); 
    let computerSel = computerSelection.toLowerCase(); 

    //Check who wins and returns the right string and adds a point to the winner
    if (computerSel === 'rock' && playerSel ==='scissors') { 
        computerScore += 1;  
        return loseStr;
    } else if (computerSel === 'rock' && playerSel === 'paper') { 
        playerScore += 1;
        return winStr;
    } else if (computerSel === 'scissors' && playerSel === 'paper') { 
        computerScore += 1;
        return loseStr;
    } else if (computerSel === 'scissors' && playerSel === 'rock') { 
        playerScore += 1;
        return winStr;
    } else if (computerSel === 'paper' && playerSel === 'rock') { 
        computerScore += 1;
        return loseStr;
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') { 
        playerScore += 1;
        return winStr;
    } else { 
        return tieStr;
    }

}
//Stores the player selection
let playerSelection = "";

//Gets and stores the randomized computer selection
let computerSelection = ""; 
