// Make a command line tic-tac-toe game from scratch for two players.
// Expected features
// ===============
// * Minimal UI that redraws the board and makes clear whose turn it is, each turn.
// * Players can submit moves (assume, admittedly unrealistically, that both players are sitting at the same keyboard).
// * Win detection - detect and display who won

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

// Try your best to work on this challenge without referring to outside resources. However, if you have to look things up online, go ahead.

// Submission instructions
// ====================
// Upon completion of your work, submit a link to the repository via this form.

/* plan:
Need a board. an array of 3 arrays

*/

const Game = function() {
  this.board = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.playerOneTurn = true;
};

Game.prototype = {
  display: function() {
    console.log(this.board.slice(1, 4));
    console.log(this.board.slice(4, 7));
    console.log(this.board.slice(7, 10));
    this.playerOneTurn
      ? console.log('Ready Player One')
      : console.log('Ready Player 2');
  },
  move: function(square) {
    // need to check if the square is an X or an O already
    // if not, make that square an X
    // if so, return something
    // need to return the board after
    if (this.board[square] !== square) {
      console.log("Square's occupied");
      return false;
    }
    this.playerOneTurn
      ? (this.board[square] = 'X')
      : (this.board[square] = 'O');
    this.playerOneTurn
      ? (this.playerOneTurn = false)
      : (this.playerOneTurn = true);
    this.display();
    console.log(this);
  },
};

module.exports = { Game };
