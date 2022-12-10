document.getElementById('play-game').addEventListener('click', function (){
    generateGameGrid();
})


//FUNZIONI

function generateGameGrid() {
    document.querySelector('.grid').innerHTML = '';
    for(let i = 0; i < 100; i++){
        const cell = document.createElement('div');
        cell.classList.add('square');
        cell.innerText =i+1;
        cell.addEventListener('click', function(){
            this.classList.toggle('clicked');
            console.log(this.innerText);
        });
        document.querySelector('.grid').appendChild(cell);
    }
}