
// const NumOfPits = 6;
// const NumSeedInPit = 4;
// const board = document.getElementById("board");
// const seeds = board.getContext ("2d");

// let x = 0; 
// let y = 0;

// let board1 =  [4, 4, 4, 4, 4, 4];  // Player 1's pit
// let board2=   [4, 4, 4, 4, 4, 4];// Player 2's pit


// let player1 = {
//   name: "Player 1",
//   score: 0,
//   pits: [0, 1, 2, 3, 4, 5] 
// };

// let player2 = {
//   name: "Player 2",
//   score: 0,
//   pits: [6, 7, 8, 9, 10, 11] 
// };

// let currentPlayer = player1; 

// console.log("Initial board state:");
// console.log(board);

// function playTurn(pitIndex) {
//   let collectedSeedToRelease = board[pitIndex];
//   board[pitIndex] = 0;

//   while (collectedSeedToRelease > 0) {
//     // Move to the next pit
//     pitIndex = (pitIndex + 1) % 12;

//     // Skip the opponent's store
//     if (currentPlayer === player1 && pitIndex === 11) {
//       pitIndex = 0;
//     } else if (currentPlayer === player2 && pitIndex === 5) {
//       pitIndex = 6;
//     }

//     // Add a stone to the current pit
//     board[pitIndex]++;
//     collectedSeed--;

    
//     if (collectedSeed === 0 && board[pitIndex] === 1 && currentPlayer.pits.includes(pitIndex)) {
//       let opponentIndex = 11 - pitIndex;
//       if (board[opponentIndex] > 0) {
//         currentPlayer.score += board[pitIndex] + board[opponentIndex];
//         board[pitIndex] = 0;
//         board[opponentIndex] = 0;
//       }
//     }
//   }

  
//   if (currentPlayer === player1 && pitIndex === 5 || currentPlayer === player2 && pitIndex === 11) {
//     console.log(currentPlayer.name + " gets another turn!");
//   } else {
//     // Switch to the other player
//     currentPlayer = (currentPlayer === player1) ? player2 : player1;
//   }


//   console.log("New board state:");
//   console.log(board);
//   console.log(player1.name + "'s score: " + player1.score);
//   console.log(player2.name + "'s score: " + player2.score);
// }


// playTurn(2);


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


/** This is the original codes Working one */
// class ClickAndHold {
//   /**
//    * 
//    * @param {EventTarget} target the HTML element to apply the event to
//    * @param {function} callback the function to run once the target is click and held
//    */
//   constructor(target, callback) {
//     this.target = target;
//     this.callback = callback;
//     this.isHeld = false;
//     this.activeHoldTimeoutId = null;

//     ["mousedown", "touchstart"].forEach(type =>   {
//       this.target.addEventListener(type, this._onHoldStart.bind(this));
//     });
  
//  ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel",].forEach(type =>   {
//       this.target.addEventListener(type, this._onHoldStart.bind(this));
//     });
  

//   }
//   _onHoldStart()  {
//       this.isHeld = true;

//       this.activeHoldTimeoutId = setTimeout (() => {
//         if (this.isHeld)  {
//               this.callback();
//         }
//       }, 1000);
//   }

//   _onHoldEnd()    {
//     this.isHeld = false;
//     clearTimeout(this.activeHoldTimeoutId);
//   }
//    /**
//    * 
//    * @param {EventTarget} target the HTML element to apply the event to
//    * @param {function} callback the function to run once the target is click and held
//    */
//   static apply(target, callback)  {
//     new ClickAndHold(target, callback);
//   }
// }

// const myButton = document.getElementById ("myButton");

// ClickAndHold.apply(myButton, () => {
//       alert("Click and hold!");
// });


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/** This is the the testing codes for the seeds click and hold */

// class ClickAndHold {
//   /**
//    * 
//    * @param {EventTarget} target the HTML element to apply the event to
//    * @param {function} callback the function to run once the target is click and held
//    */
//   constructor(target, callback) {
//     this.target = target;
//     this.callback = callback;
//     this.isHeld = false;
//     this.activeHoldTimeoutId = null;

//     ["mousedown", "touchstart"].forEach(type =>   {
//       this.target.addEventListener(type, this._onHoldStart.bind(this));
//     });
  
//  ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel",].forEach(type =>   {
//       this.target.addEventListener(type, this._onHoldStart.bind(this));
//     });
  

//   }
//   _onHoldStart()  {
//       this.isHeld = true;

//     this.activeHoldTimeoutId = setTimeout (() => {
//         if (this.isHeld)  {
//               this.callback();
//         }
//       }, 1000);
//   }

//   _onHoldEnd()    {
//     this.isHeld = false;
//     clearTimeout(this.activeHoldTimeoutId);
//   }
//    /**
//    * 
//    * @param {EventTarget} target the HTML element to apply the event to
//    * @param {function} callback the function to run once the target is click and held
//    */
//   static apply(target, callback)  {
//     new ClickAndHold(target, callback);
//   }
// }

// const seed1 = document.getElementById ("seed1");   /* Fix the name with no dash */

// ClickAndHold.apply(seed1, () => {
//       alert("Click and hold!");
// });


// to click & drag 

// let drag = false;
// document.addEventListener(
//   'mousedown', () => drag = false);

// document.addEventListener(
//   'mousemove', () => drag = true); 

// document.addEventListener(
//   'mouseup', () => console.log (
//     drag ? 'drag' : 'click'));

//     // function to move the seeds

// document.ondrag = function (event)  {
//   document.getElementById("seed1").innerHTML 
//               = "Element is being dragged!";
// }

// document.onclick = function (event)  {
//   document.getElementById("seed1").innerHTML 
//               = "Element is being clicked!";
// }








// function seed() {
//   requestAnimationFrame
// }

// @@@@@@@@@@@@@@@@@@@@######### ALL ABOUT MOVING THE SEED #############@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

seed1.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  seed1.style.position = 'absolute';
  seed1.style.zIndex = 1000;

  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(seed1);

  // centers the seed1 at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    seed1.style.left = pageX - seed1.offsetWidth / 2 + 'px';
    seed1.style.top = pageY - seed1.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned seed1 under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the seed1 on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the seed1, remove unneeded handlers
  seed1.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    seed1.onmouseup = null;
  };

};

// To disable the browser native drag & drop feature
seed1.ondragstart = function() {
  return false;
};

// To Keep the pointer wherever it is clicked on the seed
seed1.style.left = pageX - seed1.offsetWidth / 2 + 'px';
seed1.style.top = pageY - seed1.offsetHeight / 2 + 'px';

// Remembering the distance of the pointer to the-upper corner on mousedown

seed1.onmousedown = function(event) {
let shiftX = event.clientX - seed1.getBoundingClientRect().left;
let shiftY = event.clientY - seed1.getBoundingClientRect().top;

// onmousemove
// seed1 has position:absolute
seed1.style.left = event.pageX - shiftX + 'px';
seed1.style.top = event.pageY - shiftY + 'px';
}

seed1.onmousedown = function(event) {
  let shiftX = event.clientX - seed1.getBoundingClientRect().left;
  let shiftY = event.clientY - seed1.getBoundingClientRect().top;

  seed1.style.position = 'absolute';
  seed1.style.zIndex = 1000;
  document.body.append(seed1);

  moveAt(event.pageX, event.pageY);

  // moves the seed1 at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    seed1.style.left = pageX - shiftX + 'px';
    seed1.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the seed1 on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the seed1, remove unneeded handlers
  seed1.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    seed1.onmouseup = null;
  };

};

seed1.ondragstart = function() {
  return false;
};


seed1.ondragstart = function(event) {
// in a mouse event handler
seed1.hidden = true; // (*) hide the element that we drag

let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
// elemBelow is the element below the seed1, may be droppable

seed1.hidden = false; 
}

// potential droppable that we're flying over right now
let currentDroppable = null;

function onMouseMove(event) {
  moveAt(event.pageX, event.pageY);

  seed1.hidden = true;
  let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
  seed1.hidden = false;

  // mousemove events may trigger out of the window (when the seed1 is dragged off-screen)
  // if clientX/clientY are out of the window, then elementFromPoint returns null
  if (!elemBelow) return;

  // potential droppables are labeled with the class "droppable" (can be other logic)
  let droppableBelow = elemBelow.closest('.droppable');

  if (currentDroppable != droppableBelow) {
    // we're flying in or out...
    // note: both values can be null
    //   currentDroppable=null if we were not over a droppable before this event (e.g over an empty space)
    //   droppableBelow=null if we're not over a droppable now, during this event

    if (currentDroppable) {
      // the logic to process "flying out" of the droppable (remove highlight)
      leaveDroppable(currentDroppable);
    }
    currentDroppable = droppableBelow;
    if (currentDroppable) {
      // the logic to process "flying in" of the droppable
      enterDroppable(currentDroppable);
    }
  }
}

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// // potential droppable that we're flying over right now
// let currentDroppable = null;

// function onMouseMove(event) {
//   moveAt(event.pageX, event.pageY);

//   seed1.hidden = true;
//   let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//   seed1.hidden = false;

//   // mousemove events may trigger out of the window (when the seed1 is dragged off-screen)
//   // if clientX/clientY are out of the window, then elementFromPoint returns null
//   if (!elemBelow) return;

//   // potential droppables are labeled with the class "droppable" (can be other logic)
//   let droppableBelow = elemBelow.closest('.droppable');

//   if (currentDroppable != droppableBelow) {
//     // we're flying in or out...
//     // note: both values can be null
//     //   currentDroppable=null if we were not over a droppable before this event (e.g over an empty space)
//     //   droppableBelow=null if we're not over a droppable now, during this event

//     if (currentDroppable) {
//       // the logic to process "flying out" of the droppable (remove highlight)
//       leaveDroppable(currentDroppable);
//     }
//     currentDroppable = droppableBelow;
//     if (currentDroppable) {
//       // the logic to process "flying in" of the droppable
//       enterDroppable(currentDroppable);
//     }
//   }
// }

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// let currentDroppable = null;

//     seed1.onmousedown = function(event) {

//       let shiftX = event.clientX - seed1.getBoundingClientRect().left;
//       let shiftY = event.clientY - seed1.getBoundingClientRect().top;

//       seed1.style.position = 'absolute';
//       seed1.style.zIndex = 1000;
//       document.body.append(seed1);

//       moveAt(event.pageX, event.pageY);

//       function moveAt(pageX, pageY) {
//         seed1.style.left = pageX - shiftX + 'px';
//         seed1.style.top = pageY - shiftY + 'px';
//       }

//       function onMouseMove(event) {
//         moveAt(event.pageX, event.pageY);

//         seed1.hidden = true;
//         let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//         seed1.hidden = false;

//         if (!elemBelow) return;

//         let droppableBelow = elemBelow.closest('.droppable');
//         if (currentDroppable != droppableBelow) {
//           if (currentDroppable) { // null when we were not over a droppable before this event
//             leaveDroppable(currentDroppable);
//           }
//           currentDroppable = droppableBelow;
//           if (currentDroppable) { // null if we're not coming over a droppable now
//             // (maybe just left the droppable)
//             enterDroppable(currentDroppable);
//           }
//         }
//       }

//       document.addEventListener('mousemove', onMouseMove);

//       seed1.onmouseup = function() {
//         document.removeEventListener('mousemove', onMouseMove);
//         seed1.onmouseup = null;
//       };

//     };

//     function enterDroppable(elem) {
//       elem.style.background = 'pink';
//     }

//     function leaveDroppable(elem) {
//       elem.style.background = '';
//     }

//     seed1.ondragstart = function() {
//       return false;
//     };

