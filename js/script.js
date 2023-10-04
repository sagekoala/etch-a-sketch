// Program to create an etch-a-sketch, 16 x 16 grid of square divs using js

// Create reference to mainContainer div
const gridContainer = document.querySelector('.gridContainer');



// Calculate height of boxes and adjust css

const BOXES = 35; // Size of grid
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

// Floating point width of each box div after flex-grow to meet width of container
const adjustedWidth = gridContainer.childNodes[0].childNodes[0].getBoundingClientRect().width; 

// List of boxes
const boxList = document.querySelectorAll('.box');
console.log(boxList);

// update height for each box
boxList.forEach((box) => {
    box.style.height = `${adjustedWidth}px`;
});


function addClickDrawing() {
    boxList.forEach((box) => {
        box.addEventListener('click', clickEventHandler);
    })
}

// Click drawing functions
function clickEventHandler(e) {
    e.srcElement.style.backgroundColor = getRandomRGB();
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
    e.srcElement.style.backgroundColor = getRandomRGB();
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

    // Get default backgroundcolor for div with class box before event triggered
    boxList.forEach((box) => {
        box.style.backgroundColor = 'lightgray';
        box.classList.remove('active');
    });
}

function getRandomRGB() {

    // Return string with random value for red, green, and blue of rgb()
    let red = Math.floor(Math.random() * 255 ) + 1; // Random value 0 - 255
    let green = Math.floor(Math.random() * 255 ) + 1; // Random value 0 - 255
    let blue = Math.floor(Math.random() * 255 ) + 1; // Random value 0 - 255

    return `rgb(${red}, ${green}, ${blue})`;
}











