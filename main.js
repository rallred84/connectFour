let rows = 6;
let columns = 7;
let connectNum = 4;

let playNum = 1;

const playArea = document.querySelector('#playing-area');

const board = [];

for (let i = 0; i < columns; i++) {
  board.push([]);
}

const gameState = {
  board: board,
  players: {
    'Player 1': 'red',
    Computer: 'yellow',
  },
  checkForWin: function () {
    let isWinner;
    //Loop through every** column
    //** Subtracted connectNum from array length to prevent an error that would occur when trying to reference values from an array that doesnt exist. This will work for all comparisons except downward comparisons, which is handled in its own loop
    for (let i = 0; i <= board.length - connectNum; i++) {
      //Then loop through every played spot
      for (let j = 0; j < board[i].length; j++) {
        //1)Up and to right
        let compareArray = [];
        let colIdx = i;
        let rowIdx = j;
        //For each comparison, will do a loop equal to the number of values needed for a win (connectNum), and push those values to a new array. If all of those array values are then equal, we have a winner!
        for (let k = 0; k < connectNum; k++) {
          if (board[colIdx][rowIdx]) {
            compareArray.push(board[colIdx][rowIdx]);
          }
          colIdx++;
          rowIdx++;
        }
        if (compareArray.length === connectNum) {
          isWinner = true;
          for (color of compareArray) {
            if (color !== compareArray[0]) {
              isWinner = false;
            }
          }
          if (isWinner) {
            return isWinner;
          }
        }
        //2)To right
        compareArray = [];
        colIdx = i;
        rowIdx = j;
        for (let k = 0; k < connectNum; k++) {
          if (board[colIdx][rowIdx]) {
            compareArray.push(board[colIdx][rowIdx]);
          }
          colIdx++;
        }
        if (compareArray.length === connectNum) {
          isWinner = true;
          for (color of compareArray) {
            if (color !== compareArray[0]) {
              isWinner = false;
            }
          }
          if (isWinner) {
            return isWinner;
          }
        }
        //3)Down and to right
        compareArray = [];
        colIdx = i;
        rowIdx = j;
        for (let k = 0; k < connectNum; k++) {
          if (board[colIdx][rowIdx]) {
            compareArray.push(board[colIdx][rowIdx]);
          }
          colIdx++;
          rowIdx--;
        }
        if (compareArray.length === connectNum) {
          isWinner = true;
          for (color of compareArray) {
            if (color !== compareArray[0]) {
              isWinner = false;
            }
          }
          if (isWinner) {
            return isWinner;
          }
        }
      }
    }
    //4)Down

    //Needed to create a separate loop for comparing down, since the other loop didnt grab values from the final (connectNum) columns
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        compareArray = [];
        colIdx = i;
        rowIdx = j;
        for (let k = 0; k < connectNum; k++) {
          if (board[colIdx][rowIdx]) {
            compareArray.push(board[colIdx][rowIdx]);
          }
          rowIdx--;
        }
        if (compareArray.length === connectNum) {
          isWinner = true;
          for (color of compareArray) {
            if (color !== compareArray[0]) {
              isWinner = false;
            }
          }
          if (isWinner) {
            return isWinner;
          }
        }
      }
    }
  },
};

// Creating a function to create our board based on an input of rows and columns
function createBoard(col, row) {
  //create column first by ammending to playing area
  for (let i = 0; i < col; i++) {
    let column = document.createElement('div');
    playArea.appendChild(column);
    column.className = `column colIdx${i}`;
    //The row Idx will be a number that will be used to match my DOM appearance with the gameState object
    let rowIdx = rows;

    //ammend individual spots to each column, assign class of 'empty'
    for (let j = 0; j < row + 1; j++) {
      if (j === 0) {
        //The spot at the zero index will be different than the others. Not actually a part of the board, but where the player would go to drop the token
        let dropSpot = document.createElement('div');
        column.appendChild(dropSpot);
        dropSpot.className = `drop-area`;
        dropSpot.addEventListener('click', () => {
          //Checking to see if column is full. If it is full, cannot drop token
          if (board[i].length === rows) {
            alert('You cannot play here');
          } else {
            dropToken(i);
          }
        });
      } else {
        let spot = document.createElement('div');
        column.appendChild(spot);
        rowIdx--;
        spot.className = `spot`;
        //Add class of empty to each spot
        let spotClass = document.createElement('div');
        spot.appendChild(spotClass);
        spotClass.className = 'empty';
        spotClass.id = `col${i}row${rowIdx}`;
      }
    }
  }
}

createBoard(columns, rows);

function dropToken(i) {
  if (playNum % 2 === 1) {
    color = 'red';
  } else color = 'yellow';
  board[i].push(color);
  let rowIdx = board[i].length - 1;
  document.querySelector(`#col${i}row${rowIdx}`).className = color;
  playNum++;
  if (gameState.checkForWin()) {
    console.log('winner!');
  }
}
