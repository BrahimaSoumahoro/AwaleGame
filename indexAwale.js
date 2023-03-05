
const NumOfPits = 6;
const NumSeedInPit = 4;
let board = //  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
    [4, 4, 4, 4, 4, 4]   // Player 1's pit
    [4, 4, 4, 4, 4, 4] // Player 2's pit



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
/*NumOfPits
NumSeedInPit */

// const NumOfPits = 6;
// const NumSeedInPit = 4;


// let board = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
// for (let i = 0; i < 2; i++) {
//   let row = [];
//   for (let j = 0; j < NumOfPits; j++) {
//     row.push(NumSeedInPit);
//   board.push(row);
// }


// let player1 = {
//   name: "Player 1",
//   score: 0,
//   side: 0 // index of row in board array
// };

// let player2 = {
//   name: "Player 2",
//   score: 0,
//   side: 1 // index of row in board array
// };


// let currentPlayer = Math.round(Math.random()) ? player1 : player2;


// function collectedSeed(pitIndex, player) {
//   let collectedSeedToRelease = board[player.side][pitIndex];
//   board[player.side][pitIndex] = 0;
//   let currentIndex = pitIndex;
//   while (collectedSeedToRelease > 0) {
//     currentIndex = (currentIndex + 1) % NumOfPits;
//     if (currentIndex === pitIndex) {

//       continue;
//     }
//     board[player.side][currentIndex]++;
//     collectedSeedToRelease--;
//   }

//   if (currentIndex === player.side * NumOfPits + NumOfPits - 1) {
//     player.score++;
//     return true; // get another turn
//   }

//   if (board[player.side][currentIndex] === 1) {
//     let opponentIndex = NumOfPits - 1 - currentIndex;
//     if (board[player.side ^ 1][opponentIndex] > 0) {
//       player.score += board[player.side ^ 1][opponentIndex] + 1;
//       board[player.side][currentIndex] = 0;
//       board[player.side ^ 1][opponentIndex] = 0;
//     }
//   }
//   return false; // end turn
// }

