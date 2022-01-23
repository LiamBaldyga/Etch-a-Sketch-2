//Declarations
const container = document.querySelector('.container');
const reset = document.querySelector('button');
const colorSelect = document.getElementById('color');
const slider = document.getElementById('range');
const sizeLabel = document.getElementById('slider');
let gridInput = 16;
let color = 'black';


//Create Grid
function createGrid(gridSize) {
    let gridArea = gridSize * gridSize;
    for (let i = 0; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    }
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}

//Colors Grid
function colorGrid() {
    this.style.backgroundColor = color;
}

//Resets the grid to white
function clearGrid() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = 'white');
}

//Gets rid of grid boxes completely
function killGrid() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
}
function sliderInit() {
    slider.value = gridInput;
    sizeLabel.textContent = `${slider.value} x ${slider.value}`;
}
//Initial Page Setup
createGrid(16);
sliderInit();
colorSelect.value = color;


//Event Listeners
reset.addEventListener('click', clearGrid);

colorSelect.addEventListener('input', function() {
    color = colorSelect.value;
});

slider.oninput = function() {
    sizeLabel.textContent = `${slider.value} x ${slider.value}`;
}
slider.onchange = function() {
    gridInput = slider.value;
    killGrid();
    createGrid(gridInput);
}
