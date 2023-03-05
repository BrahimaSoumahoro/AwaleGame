// const NumOfPits = 6;
// const NumSeedInPit = 4;


// let board = [
//     [4, 4, 4, 4, 4, 4],   // Player 1's pit
//     [4, 4, 4, 4, 4, 4],  // Player 2's pit
// ];
// for (let i = 0; i < 2; i++) {
//   let row = [];
//   for (let j = 0; j < NumOfPits; j++) {
//     row.push(NumSeedInPit);
//   board.push(row);
// }

//        PLAYER 2
//     6   5   4   3   2   1
// ---------------------------
// | 4 | 4 | 4 | 4 | 4 | 4 |   PLAYER 1
// ---------------------------
// | 4 | 4 | 4 | 4 | 4 | 4 |   PLAYER 2
// ---------------------------
//     1   2   3   4   5   6
//        PLAYER 1



// let player1 = {
//   name: "Player 1",
//   score: 0,
//   side: 0 
// };

// let player2 = {
//   name: "Player 2",
//   score: 0,
//   side: 1 
// };


// let currentPlayer = Math.round(Math.random()) ? player1 : player2;





// function sowSeeds(pitIndex, player) {
//   let seedsToSow = board[player.side][pitIndex];
//   board[player.side][pitIndex] = 0;
//   let currentIndex = pitIndex;
//   while (collectedStoneToRelease > 0) {
//     currentIndex = (currentIndex + 1) % NumOfPits;
//     if (currentIndex === pitIndex) {
//       // 
//       continue;
//     }
//     board[player.side][currentIndex]++;
//     collectedStoneToRelease--;
//   }
  
//   if (currentIndex === player.side * NumOfPits + NumOfPits - 1) {
//     player.score++;
//     return true; 
//   }
  
//   if (board[player.side][currentIndex] === 1) {
//     let oppositeIndex = NumOfPits - 1 - currentIndex;
//     if (board[player.side ^ 1][oppositeIndex] > 0) {
//       player.score += board[player.side ^ 1][oppositeIndex] + 1;
//       board[player.side][currentIndex] = 0;
//       board[player.side ^ 1][oppositeIndex] = 0;
//     }
//   }
//   return false; 
// }