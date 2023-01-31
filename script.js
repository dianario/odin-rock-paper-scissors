function getComputerChoice () {
  const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*options.length);
    return options[randomIndex];
  }

let computerSelection;
let playerSelection;

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); 
  if (playerSelection === computerSelection) {
    console.log("It's a tie");
    return "It's a tie"; 
  } else {
      let round = [playerSelection, computerSelection]; 
      let winner; 
      if (round.indexOf("rock") !== -1 && round.indexOf("paper") !== -1 ) {
         winner = round.indexOf("paper");
      } else if (round.indexOf("paper") !== -1 &&
      round.indexOf("scissors") !== -1) {
       winner = round.indexOf("scissors");
      } else if (round.indexOf("rock") !== -1 &&
      round.indexOf("scissors") !== -1) {
        winner = round.indexOf("rock");
      } else {
        console.log(`There has been a mistake. Select again`);
        return 'There has been a mistake. Select again.';
      }
      if (winner === 0) { 
         console.log(`You win by playing ${round[winner]}!`);
         return winner;
      } else {
        console.log(`You lose! Computer wins by playing ${round[winner]}.`);
          return winner;
       }
     }
}

function playGame (){
  let playerWins =0;
  let computerWins =0;
  for (let roundCount = 0; roundCount < 5; roundCount ++){
    computerSelection =  getComputerChoice(); 
    playerSelection = prompt("Choose between rock, paper and scissors: ");
    console.log(`Computer chooses: ${computerSelection} `);
    let round = playRound(playerSelection, computerSelection);
    if (round === 0) {
      playerWins++; 
    } else if (round === 1) {
      computerWins++; 
    }
   }
  let finWinner;
  if (playerWins > computerWins) {
    finWinner = "player"
  } else if (computerWins > playerWins) {finWinner = "computer"}
  console.log (`${finWinner.toUpperCase()} wins game`)
  return finWinner;
}
console.log(playGame());
