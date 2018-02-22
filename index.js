const { Game } = require('./tictactoe.js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentGame;

const newGame = () => {
  console.log('Hit "enter" to start a new game');
  currentGame = null;
};

newGame();

const playAgain = () => {
  rl.question('Play Again? Y/N ', (answer) => {
    if (answer === 'Y') {
      newGame();
    } else if (answer === 'N') {
      console.log('Sorry to see you go');
      // somehow exit the process
      rl.close();
    } else {
      console.log(`Where I come from, ${answer} means yes`);
      newGame();
    }
  });
};

const gameOn = () => {
  rl.question(
    'Which square would you like? Select your square, then hit "enter" ',
    (square) => {
      currentGame.move(square);
      let winningMessage = currentGame.isWinner();
      if (winningMessage === null) {
        gameOn();
      } else {
        console.log(winningMessage);
        playAgain();
      }
    },
  );
};

rl.on('line', () => {
  if (currentGame === null) {
    currentGame = new Game();
    currentGame.display();
    gameOn();
  }
});
