// Program to create an etch-a-sketch, 16 x 16 grid of square divs using js

// Create reference to body element and create a mainContainer div
const bodyReference = document.querySelector('body');
const mainContainer = document.createElement('div');

let BOXES = 16;
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

    mainContainer.appendChild(innerContainer); // Append all innerContainer to mainContainer
}

// Append grid to the body element
bodyReference.appendChild(mainContainer);










