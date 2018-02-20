const { Game } = require('./tictactoe.js');
const program = require('commander');

program.version('0.0.1').description('Tic-Tac-Toe for the modern command line');

let currentGame = null;

program
  .command('start')
  .alias('s')
  .description('Starts a new game')
  .action(() => {
    currentGame = new Game();
  });

program
  .command('move <square>')
  .description('Makes a move on the board')
  .action((square) => {
    currentGame.move(square);
  });

program.parse(process.argv);
