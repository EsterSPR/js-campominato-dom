//FUNZIONI

function createBombsArray(min, max) {
    let bombs = [];
    let i = 0;
    while(i < 16){
        let number = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!bombs.includes(number)){
            bombs.push(number);
            i++;
        }
    }

    return bombs;
}

function createNewGame(){
    let difficulty = parseInt(document.getElementById('level').value);

    arrayBombs = [];

    let cellsNumber;
    let cellsPerRow;

    switch(difficulty){
        case 1:
            cellsNumber = 100;
            cellsPerRow = 10;
            break;
        case 2:
            cellsNumber = 81;
            cellsPerRow = 9;
            break;
        case 3:
            cellsNumber = 49;
            cellsPerRow = 7;
            break;
        default:
            cellsNumber = 100;
            cellsPerRow = 10;
            break;
    }

    arrayBombs = createBombsArray(1, cellsNumber);
    console.log(arrayBombs);

    generateGameGrid(arrayBombs, cellsNumber, cellsPerRow);
}

function createSingleCell(num, cells_per_row){
    const cell = document.createElement('div');

    cell.classList.add('square');

    let sideLength = `calc(100% / ${cells_per_row})`;

    cell.style.width = sideLength;
    cell.style.height = sideLength;
    cell.innerText = num;

    return cell;
}

function generateGameGrid(bombs_array, cellsNumber, cellsPerRow){
    document.querySelector('.container').innerHTML = '';
    
    const grid = document.createElement('div');
    grid.classList.add('grid');

    let goodCells = 0; 

    for (let i = 0; i < cellsNumber; i++){
        const cell = createSingleCell(i+1, cellsPerRow);
        cell.addEventListener('click', function(){
            this.classList.toggle('clicked');

            if(bombs_array.includes(parseInt(this.innerText))){
                this.classList.add('red');
                grid.classList.add('events-none');
                alert('Sei esploso! Hai cliccato sulla bomba: '+this.innerText);
                document.getElementById('score').innerText = goodCells;
            } else {
                goodCells++;
                document.getElementById('score').innerText = goodCells;
            }
        })

        grid.appendChild(cell);
    }

    document.querySelector('.container').appendChild(grid);
}

//CORPO

document.getElementById('play-game').addEventListener('click', function (){
    // generateGameGrid();
    createNewGame();
})