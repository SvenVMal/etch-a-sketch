const rows = 16;
const columns = 16;

//const container = document.querySelector('.container');

/*for (let row = 0; row < 16; row++) {
    for (let column = 0; column < 16; column++) {
        const div = document.createElement('div');

        div.classList.add('grid');
        //div.setAttribute('id', 'grid')
        container.appendChild(div);

        div.addEventListener('mouseover', function () {
            div.style.background = 'black';
        });
    }
    
}*/

window.onload = function () {
    setGrid();
};

function setGrid() {
    // Set a grid 16 by 16
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            let tile = document.createElement('div');
            tile.classList.add('tile');
            let container = document.querySelector('.container');
            container.appendChild(tile);
    
            tile.addEventListener('mouseover', function () {
                tile.style.background = 'black';
            });

            //clearGrid();
        }
    }
}



let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function () {
    // reset the board - return tiles to white
    let tiles = document.getElementsByClassName('tile');
    console.log(tiles.length);
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].style.background = 'white';
    }
});   

