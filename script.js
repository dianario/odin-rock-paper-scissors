function getComputerChoice () {
    const options = ["Rock", "Paper", "Scissors"];
      let randomIndex = Math.floor(Math.random()*options.length);
      return options[randomIndex];
    }
    console.log(`Computer chooses: ${getComputerChoice ()} `)