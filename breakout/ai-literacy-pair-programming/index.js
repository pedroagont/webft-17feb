// First install chalk by running: npm install chalk

const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let attempts;
let targetNumber;

function startGame() {
  attempts = 5;
  targetNumber = Math.floor(Math.random() * 100) + 1;
  console.log(chalk.blueBright('\nWelcome to Guess the Number!'));
  console.log(chalk.cyan('I have picked a number between 1 and 100. You have 5 attempts!'));
  playRound();
}

function playRound() {
  rl.question(chalk.yellow('\nEnter your guess: '), (input) => {
    const guess = Number(input);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log(chalk.red('Invalid input. Please enter a number between 1 and 100.'));
      return playRound();
    }

    handleGuess(guess);
  });
}

function handleGuess(guess) {
  if (guess === targetNumber) {
    const triesUsed = 5 - attempts + 1;
    console.log(chalk.greenBright(`\nCongratulations! You guessed the number in ${triesUsed} attempt(s)! 🎉`));
    askReplay();
  } else {
    attempts--;
    if (attempts === 0) {
      console.log(chalk.redBright(`\nYou've run out of attempts! The number was ${targetNumber}. 😞`));
      askReplay();
    } else {
      if (guess > targetNumber) {
        console.log(chalk.magenta('Too high! Try again.'));
      } else {
        console.log(chalk.magenta('Too low! Try again.'));
      }
      console.log(chalk.gray(`Attempts remaining: ${attempts}`));
      playRound();
    }
  }
}

function askReplay() {
  rl.question(chalk.yellow('\nWould you like to play again? (yes/no): '), (answer) => {
    const normalized = answer.trim().toLowerCase();
    if (normalized === 'yes' || normalized === 'y') {
      startGame();
    } else {
      console.log(chalk.blueBright('\nThanks for playing! Goodbye! 👋'));
      rl.close();
    }
  });
}

startGame();
