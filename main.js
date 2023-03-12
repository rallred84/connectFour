let rows = 6;
let columns = 7;

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
}
