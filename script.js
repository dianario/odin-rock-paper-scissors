function getComputerChoice () {
  const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*options.length);
    return options[randomIndex];
  }
let computerSelection = getComputerChoice();

playerSelection = prompt("Choose between rock, paper and scissors: ")

console.log(`Computer chooses: ${getComputerChoice ()} `)

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); 
if (playerSelection === computerSelection)
{
  return "It's a tie!"; 
}
  else {
    let round = [playerSelection, computerSelection]; 
    let winner; 
    
    if (round.indexOf("rock") !== -1 && round.indexOf("paper") !== -1 ){
       winner = round.indexOf("paper");
  }
    else if (round.indexOf("paper") !== -1 && round.indexOf("scissors") !== -1){
     winner = round.indexOf("scissors");
    }
    else if (round.indexOf("rock") !== -1 && round.indexOf("scissors") !== -1) {
      winner = round.indexOf("rock");
    }
    else{
      return 'There has been a mistake. Select again.';
    }
    return `The winner is ${round[winner]}`
   }
}
console.log(playRound (playerSelection, computerSelection));

/* Solution 1
Create array 
If array contains rock && paper
Return position of paper as var
	Else if array contains rock and scissors 
	Return position of rock as var
	Else if array contains paper and scissors
	Return position of scissors as var
if var = 0   Player is winner
if var = 1  Computer is winner
*/