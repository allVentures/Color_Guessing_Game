var colors = generateRandomColors(6);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor(); 				// random color from the color array 
// console.log("picked color var: ",pickedColor);
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var h1=document.getElementsByTagName("h1");

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", funcCompareColors);
}

function funcCompareColors() {
    var clickedColor = this.style.background;
    // console.log('clicked color',clickedColor);
    if (clickedColor == pickedColor) {
        messageDisplay.textContent = "Correct! ;-)";
        messageDisplay.style.color = "green";
        changeColors(clickedColor);
        h1[0].style.background=clickedColor;
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
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	// console.log('picked color:',random);
	return colors[random];
}

function generateRandomColors(numColors) {
	var colorArray=[];
for (var i = 0; i < numColors; i++) {
	colorArray.push(randomColor());
	}
    // console.log('color array',colorArray);
	return colorArray;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}