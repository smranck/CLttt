// Bonus / stretch goals (any or all of the following)
// =======================================
// * Structure your code such that the UI can be turned easily into a native mobile app (iOS say) without having to rewrite the core game logic.
// * Implement win detection with a functional rather than iterative style.
// * Between moves, rotate the board 90 degrees counter-clockwise. The moves "fall" due to "gravity", post-rotation.

// Implementation instructions
// =======================
// * Create the project from scratch. Don't just clone an existing project.
// * This includes writing configuration files for any dependencies and test framework setup.
// * You should have a reasonably thorough suite of unit tests using a real unit test framework.
// * Use the editor of your choice.
// * Init a git repo for this project.
// * Push the repo up to github.
// * Make small commits as you go to illustrate your thought process and be able to back out changes easily.
// * Don't forget to push your final solution up to Github.
// * Add a professional-looking README file with installation and usage instructions.

/* eslint func-names: 0  */
/* eslint object-shorthand: 0  */
const Game = function() {
  this.board = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.playerOneTurn = true;
  this.turnCounter = 0;
};

Game.prototype = {
  display: function() {
    console.log(this.board.slice(1, 4));
    console.log(this.board.slice(4, 7));
    console.log(this.board.slice(7, 10));
    if (this.playerOneTurn) {
      console.log('Ready Player One');
    } else {
      console.log('Ready Player Two');
    }
  },
  isWinner: function() {
    // check for win here. return winner or false
    let winners = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    let winner = null;
    for (let i = 0; i < winners.length; i += 1) {
      if (
        this.board[winners[i][0]] === this.board[winners[i][1]] &&
        this.board[winners[i][1]] === this.board[winners[i][2]]
      ) {
        if (this.board[winners[i][0]] === 'X') {
          winner = 'Player One Wins!';
        } else {
          winner = 'Player Two Wins!';
        }
      } else if (this.turnCounter === 9) {
        winner = 'Another Tie!';
      }
    }
    return winner;
  },
  move: function(square) {
    if (isNaN(Number(square)) || square < 1 || square > 9) {
      console.log("You fool! That isn't a square!");
      console.log(typeof square);
      if (this.playerOneTurn) {
        console.log('Ready Player One');
      } else {
        console.log('Ready Player 2');
      }
      return false;
    }
    if (this.board[square] === 'X' || this.board[square] === 'O') {
      console.log("Square's occupied, try again");
      return false;
    }
    if (this.playerOneTurn) {
      this.board[square] = 'X';
      this.playerOneTurn = false;
      this.turnCounter += 1;
    } else {
      this.board[square] = 'O';
      this.playerOneTurn = true;
      this.turnCounter += 1;
    }
    this.display();
  },
};

module.exports = { Game };
