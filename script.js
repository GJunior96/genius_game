let order = [];
let clickedOrder = [];
let score = 0;

// 0 - GREEN
// 1 - RED
// 2 - YELLOW
// 3 - BLUE

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


// Create a random color order
let shuffleOrder = () => {
    let color = Math.floor(Math.random() * 4);
    order[order.length] = color;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Turn on the next color
let lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// Check if the picked buttons are the same as the game order
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if(clickedOrder.length === order.length) {
        alert(`Score: ${score}\nYou're right! Starting next level!`);
        nextLevel();
    }
}

// Function for the user click
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// Function that returns the color
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// Function that increase the level
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Function for the gameover
let gameover = () => {
    alert(`score: ${score}!\nYou lose!\nClick on OK to start a new game.`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Function to start a new game
let playGame = () => {
    alert("welcome to Genius! Starting a new game!");
    score = 0;

    nextLevel();
}


// Click events
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Start
playGame();