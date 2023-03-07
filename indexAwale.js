
const NumOfPits = 6;
const NumSeedInPit = 4;
const board = document.getElementById("board");
const seeds = board.getContext ("2d");

let x = 0; 
let y = 0;

let board1 =  [4, 4, 4, 4, 4, 4];  // Player 1's pit
let board2=   [4, 4, 4, 4, 4, 4];// Player 2's pit


let player1 = {
  name: "Player 1",
  score: 0,
  pits: [0, 1, 2, 3, 4, 5] 
};

let player2 = {
  name: "Player 2",
  score: 0,
  pits: [6, 7, 8, 9, 10, 11] 
};

let currentPlayer = player1; 

console.log("Initial board state:");
console.log(board);

function playTurn(pitIndex) {
  let collectedSeedToRelease = board[pitIndex];
  board[pitIndex] = 0;

  while (collectedSeedToRelease > 0) {
    // Move to the next pit
    pitIndex = (pitIndex + 1) % 12;

    // Skip the opponent's store
    if (currentPlayer === player1 && pitIndex === 11) {
      pitIndex = 0;
    } else if (currentPlayer === player2 && pitIndex === 5) {
      pitIndex = 6;
    }

    // Add a stone to the current pit
    board[pitIndex]++;
    collectedSeed--;

    
    if (collectedSeed === 0 && board[pitIndex] === 1 && currentPlayer.pits.includes(pitIndex)) {
      let opponentIndex = 11 - pitIndex;
      if (board[opponentIndex] > 0) {
        currentPlayer.score += board[pitIndex] + board[opponentIndex];
        board[pitIndex] = 0;
        board[opponentIndex] = 0;
      }
    }
  }

  
  if (currentPlayer === player1 && pitIndex === 5 || currentPlayer === player2 && pitIndex === 11) {
    console.log(currentPlayer.name + " gets another turn!");
  } else {
    // Switch to the other player
    currentPlayer = (currentPlayer === player1) ? player2 : player1;
  }


  console.log("New board state:");
  console.log(board);
  console.log(player1.name + "'s score: " + player1.score);
  console.log(player2.name + "'s score: " + player2.score);
}


playTurn(2);


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

class ClickAndHold {
  /**
   * 
   * @param {EventTarget} target the HTML element to apply the event to
   * @param {function} callback the function to run once the target is click and held
   */
  constructor(target, callback) {
    this.target = target;
    this.callback = callback;
    this.isHeld = false;
    this.activeHoldTimeoutId = null;
  
  }
}

function seed() {
  requestAnimationFrame
}