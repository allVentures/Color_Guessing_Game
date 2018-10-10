var numberOfSquares =6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor(); // random color from the color array 
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.getElementsByTagName("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var check = "0";

easyBtn.addEventListener("click", selectButton);
hardBtn.addEventListener("click", selectButton2);

function selectButton() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) { //as long as there are colors in colors array
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function selectButton2() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
}

function changeSqColor() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", funcCompareColors);
    }
}

changeSqColor();

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
    // console.log('picked color:',random);
    return colors[random];
}

function generateRandomColors(numColors) {
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
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", resetGame);

function resetGame() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    changeSqColor();
    h1[0].style.background = "";
}


// for (var i = 0; i < squares.length; i++) {
//   squares[i].style.background = colors[i];}