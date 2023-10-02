// Program to create an etch-a-sketch, 16 x 16 grid of square divs using js

// Create reference to mainContainer div
const gridContainer = document.querySelector('.gridContainer');

const BOXES = 16; // Size of grid
for (let i = 0; i < BOXES; i++) {
    
    // Initialize new inner container
    let innerContainer = document.createElement('div');
    innerContainer.classList.add('inner');

    // Create numDivs worth of new divs
    for (let j = 0; j < BOXES; j++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('box');
        innerContainer.appendChild(newDiv); // Append all newDiv to innerContainer 
    }

    gridContainer.appendChild(innerContainer); // Append all innerContainer to gridContainer
}

// List of boxes
const boxList = document.querySelectorAll('.box');

function addClickDrawing() {
    boxList.forEach((box) => {
        box.addEventListener('click', clickEventHandler);
    })
}

// Click drawing functions
function clickEventHandler(e) {
    e.srcElement.classList.add('active');
}

function removeClickDrawing() {
    // Remove event listener for clicks
    boxList.forEach((box) => {
        box.removeEventListener('click', clickEventHandler);
    });

    // Reset box style
    resetBoxStyle();
}


function addmouseenterDrawing() {
    boxList.forEach((box) => {
        box.addEventListener('mouseenter', mouseenterEventHandler);
    });
}

// Mousover drawing functions
function mouseenterEventHandler(e) {
    e.srcElement.classList.add('active');
}

function removemouseenterDrawing() {

    // Remove mouseenter event listener
    boxList.forEach((box) => {
        box.removeEventListener('mouseenter', mouseenterEventHandler);
    });

    // Reset box style
    resetBoxStyle();
}

// Set up eventListener on clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', (e) => {
    removemouseenterDrawing();
    removeClickDrawing();
});

// Set up eventListener on click button
const clickButton = document.querySelector('.click');
clickButton.addEventListener('click', () => {
    removemouseenterDrawing();
    addClickDrawing();
});

// Set up eventListener on mouseenter button
const mouseenterButton = document.querySelector('.mouseenter');
mouseenterButton.addEventListener('click', () => {
    removeClickDrawing();
    addmouseenterDrawing();
});

function resetBoxStyle() {
    boxList.forEach((box) => {
        box.classList.remove('active');
    });
}








