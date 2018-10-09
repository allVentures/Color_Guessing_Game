var colors = [
"RGB(255,0,0)",
"RGB(255,0,240",
"RGB(255,79,0)",
"RGB(255,0,100)",
"RGB(255,0,0)",
"RGB(255,0,0)"
];

var squares=document.getElementsByClassName("square");
for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
}