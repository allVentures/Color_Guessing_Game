var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor(); // random color from the color array 
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.getElementsByTagName("h1");
var resetButton = document.getElementById("reset");
// var easyBtn = document.getElementById("easy");
// var hardBtn = document.getElementById("hard");
var modeButtons = document.getElementsByClassName("mode");

for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", selectButton);
}

function selectButton() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    if (this.textContent == "Easy") {
        numberOfSquares = 3;
    } else {
        numberOfSquares = 6;
    }

    resetGame();
}

function changeSqColor() {
    console.log("squares.length", squares.length); ////
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) { //as long as there are colors in colors array
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
            squares[i].addEventListener("click", funcCompareColors);
        } else {
            squares[i].style.display = "none";
        }
    }
}

changeSqColor();

function resetGame() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    changeSqColor();
    h1[0].style.background = "";
}

function funcCompareColors() {
    var clickedColor = this.style.background;
    // console.log('clicked color',clickedColor);
    if (clickedColor == pickedColor) {
        messageDisplay.textContent = "Correct! ;-)";
        messageDisplay.style.color = "green";
        changeColors(clickedColor);
        h1[0].style.background = clickedColor;
        resetButton.textContent = "Play again?";
    } else {
        this.style.background = "#333333";
        messageDisplay.textContent = "Try again!"
    }
}

function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(numColors) { //ok
    var colorArray = [];
    for (var i = 0; i < numColors; i++) {
        colorArray.push(randomColor());
    }
    return colorArray;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var randColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return randColor;
}

resetButton.addEventListener("click", resetGame);