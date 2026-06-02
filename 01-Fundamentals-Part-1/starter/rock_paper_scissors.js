
const readline = require("readline"); // readline module for user input, we can read input with this,
                                      // require it at the top of the file, and then create an interface to read from stdin and write to stdout.


const choices = ["rock", "paper", "scissors"];
// const computer = choices[Math.floor(Math.random() * 3)]; // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
// By multiplying it by 3, we get a number between 0 and 3 (exclusive).
                                                                  //Math.floor() then rounds it down to the nearest whole number,
                                                                   // giving us an index of 0, 1, or 2, which corresponds to "rock", "paper", or "scissors" in the choices array.
const rl = readline.createInterface({  // in here we create Interface , process.stdin = listening to user input, process.stdout = writing output to console
  input: process.stdin,
  output: process.stdout,
});
function playRound() {
  const computer = choices[Math.floor(Math.random() * 3)]; // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
  // By multiplying it by 3, we get a number between 0 and 3 (exclusive).
  //Math.floor() then rounds it down to the nearest whole number,
  // giving us an index of 0, 1, or 2, which corresponds to "rock", "paper", or "scissors" in the choices array.

    rl.question("Your choice (rock - paper - scissors): ", (player) => {
    if (!choices.includes(player)) {
      console.log("Invalid, Use: rock, paper or scissors");
      playRound();
      return;
    }
      console.log(`User: ${player} | Computer: ${computer}`);

      if (player === computer) {
        console.log("One more time");
        playRound();
        }
      else if (
          (player === "rock"     && computer === "scissors") ||
          (player === "scissors" && computer === "paper")    ||
          (player === "paper"    && computer === "rock")
      )
      {
        console.log("You win");
        rl.close();
      }
      else {
        console.log("Computer wins");
      rl.close();}
    });
}
playRound();