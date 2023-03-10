let rows = 6;
let columns = 7;

const playArea = document.querySelector('#playing-area');

// Creating a function to create our board based on an input of rows and columns
function createBoard(row, col) {
  //create row first by ammending to playing area
  for (let i = 1; i <= row; i++) {
    let row = document.createElement('div');
    playArea.appendChild(row);
    row.className = 'row';
    //ammend individual spots to each row, assign class of 'empty'
    for (let j = 1; j <= columns; j++) {
      let spot = document.createElement('div');
      row.appendChild(spot);
      spot.className = 'spot';
      //Add class of empty to each spot
      let spotClass = document.createElement('div');
      spot.appendChild(spotClass);
      spotClass.className = 'empty';
    }
  }
}

createBoard(rows, columns);

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
