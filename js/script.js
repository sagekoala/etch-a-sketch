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


function addMouseoverDrawing() {
    boxList.forEach((box) => {
        box.addEventListener('mouseover', mouseoverEventHandler);
    });
}

// Mousover drawing functions
function mouseoverEventHandler(e) {
    e.srcElement.classList.add('active');
}

function removeMouseoverDrawing() {

    // Remove mouseover event listener
    boxList.forEach((box) => {
        box.removeEventListener('mouseover', mouseoverEventHandler);
    });

    // Reset box style
    resetBoxStyle();
}

// Set up eventListener on clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', (e) => {
    removeMouseoverDrawing();
    removeClickDrawing();
});

// Set up eventListener on click button
const clickButton = document.querySelector('.click');
clickButton.addEventListener('click', () => {
    removeMouseoverDrawing();
    addClickDrawing();
});

// Set up eventListener on mouseover button
const mouseoverButton = document.querySelector('.mouseover');
mouseoverButton.addEventListener('click', () => {
    removeClickDrawing();
    addMouseoverDrawing();
});

function resetBoxStyle() {
    boxList.forEach((box) => {
        box.classList.remove('active');
    });
}








