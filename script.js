const gridWidth = 650;


window.onload = function () {
    setGrid();
};

function setGrid(nr=16) {
    // Set a grid 16 by 16 for example
    for (let row = 0; row < nr; row++) {
        for (let column = 0; column < nr; column++) {
            let tile = document.createElement('div');
            tile.classList.add('tile');
            // width and heigh is -2px because of 1px border
            // grid is fixed at 400 by 400
            // to get tile size: grid width divide by grid size
            // eg: grid 16 by 16 => 400 / 16 = 25px (remove 2px for border)
            // Using outline don't need to account for the border pixels
            let size = (gridWidth / nr);
            tile.setAttribute('style', 'width: ' + size + 'px; height: '+ size +'px;');
            let container = document.querySelector('.container');
            container.appendChild(tile);
    
            tile.addEventListener('mouseover', function () {
                tile.style.background = 'black';
            });

            //clearGrid();
        }
    }
}

function deleteGrid() {
    let tiles = document.querySelector('.container');
    while (tiles.firstChild) {
        tiles.removeChild(tiles.firstChild);
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

let grid16Btn = document.getElementById('grid16');
grid16Btn.addEventListener('click', function () {
    deleteGrid();
    setGrid(16);
});

let grid32Btn = document.getElementById('grid32');
grid32Btn.addEventListener('click', function () {
    deleteGrid();
    setGrid(32);
});

let grid64Btn = document.getElementById('grid64');
grid64Btn.addEventListener('click', function () {
    deleteGrid();
    setGrid(64);
});