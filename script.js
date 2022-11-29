const gridContainer = document.querySelector('.gridContainer');
const rainbow = document.querySelector('.rainbow');
const defBtn = document.querySelector('.default');
const erase = document.querySelector('.erase');
const slider = document.querySelector(".slider");
const output = document.querySelector("output");

slider.value = 16;
createGrid(16);

output.innerText = slider.value;

slider.oninput = function() {
  output.innerText = this.value;
}

let colour = 'rgb(32, 194, 14)';
let rainBool = false;

defBtn.addEventListener('click',() => {
    colour = 'rgb(32, 194, 14)';
    rainBool = false;
});

erase.addEventListener('click',() => {
    colour = 'rgb(0, 0, 0)';
    rainBool = false;
});

rainbow.addEventListener('click',() => {
    rainBool = true;
});

slider.addEventListener('mouseup', pixelSize)

function pixelSize() {
    emptyGrid();
    createGrid(+slider.value);
}

function emptyGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    return;
}

function createGrid(length) {
    gridContainer.style.gridTemplateColumns = 'repeat(' + length + ', 1fr)';
    gridContainer.style.gridTemplateRows = 'repeat(' + length + ', 1fr)';
    for (let i = 0; i < length ** 2; i++) {
        let gridItem = document.createElement('div');
        gridItem.style.width = (800/length) + 'px';
        gridItem.style.height = (800/length) + 'px';
        gridItem.addEventListener('mouseover', (e) => {
            setColour(e);
        });
        gridContainer.appendChild(gridItem);
    }
}

function setColour(e) {
    if (rainBool) {
        let randColour = `rgb(${(Math.floor(Math.random()*256))}, ${(Math.floor(Math.random()*256))}, ${(Math.floor(Math.random()*256))})`
        e.target.style.backgroundColor = randColour;
    } else {
        e.target.style.backgroundColor = colour;
    }
}