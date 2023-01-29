function getComputerChoice () {
  const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*options.length);
    return options[randomIndex];
  }
let computerSelection = getComputerChoice();

playerSelection = prompt("Choose between rock, paper and scissors: ")

console.log(`Computer chooses: ${getComputerChoice ()} `)

function playRound (playerSelection, computerSelection) {
playerSelection = playerSelection.toLowercase;
if (playerSelection === computerSelection){
return alert("It's a tie!");
}
else {
  return alert("Winner not yet declared");
}
}
console.log (playRound (playerSelection, computerSelection));

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