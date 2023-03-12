let rows = 6;
let columns = 7;

const playArea = document.querySelector('#playing-area');

// Creating a function to create our board based on an input of rows and columns
function createBoard(col, row) {
  //create column first by ammending to playing area
  for (let i = 1; i <= col; i++) {
    let column = document.createElement('div');
    playArea.appendChild(column);
    column.className = 'column';
    //ammend individual spots to each column, assign class of 'empty'
    for (let j = 0; j <= row; j++) {
      if (j === 0) {
        //The spot at the zero index will be different than the others. Not actually a part of the board, but where the player would go to drop the token
        let dropSpot = document.createElement('div');
        column.appendChild(dropSpot);
        dropSpot.className = 'drop-area';
      } else {
        let spot = document.createElement('div');
        column.appendChild(spot);
        spot.className = 'spot';
        //Add class of empty to each spot
        let spotClass = document.createElement('div');
        spot.appendChild(spotClass);
        spotClass.className = 'empty';
      }
    }
  }
}

createBoard(columns, rows);

playArea.addEventListener('click', (event) => {
  console.log(event.target);
  if (event.target.classList.contains('empty')) {
    console.log(event.target.className);

    event.target.className = 'red';
  }
});

playArea.addEventListener('dblclick', (event) => {
  console.log(event.target);
  if (event.target.classList.contains('red')) {
    console.log(event.target.className);
    event.target.className = 'yellow';
  }
});
