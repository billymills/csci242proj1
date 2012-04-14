/*
Billy Mills
CSCI 242
proj1p2.js
April 23, 2012
*/

window.onload = init;

function init() {
	//code for main grid canvas
	var canvasDiv = document.getElementById("canvasDiv");
	canvasDiv.innerHTML = "<canvas width='720' height='400' id='myCanvas'></canvas>";
	var myCanvas = document.getElementById("myCanvas");
	var myCanvasContext = myCanvas.getContext("2d");
	//call function to draw grid
	drawGrid(myCanvas, myCanvasContext);
	//call function to add times
	drawTimes(myCanvas, myCanvasContext);
	
	//code for header canvas
	var headerCanvas = document.getElementById("headerCanvasDiv");
	headerCanvasDiv.innerHTML = "<canvas width='720' height='40' id='myHeaderCanvas'></canvas>";
	var myHeaderCanvas = document.getElementById("myHeaderCanvas");
	var myHeaderCtx = myHeaderCanvas.getContext("2d");
	//call function to display days of the week
	drawLabel(myHeaderCanvas, myHeaderCtx);
} //end init

function drawGrid(myCanvas, myCtx) {
	//var and for loop to draw vertical lines
	var x = 120;
	for(i=0; i<5; i++) {
		myCtx.beginPath();
		myCtx.moveTo(x,0);
		myCtx.lineTo(x,500);
		myCtx.stroke();
		x = x+120;
	}; //end for loop

	//var and for loop to draw horizontal lines
	var y = 40;
	for(i=0; i<9; i++) {
		myCtx.beginPath();
		myCtx.moveTo(0,y);
		myCtx.lineTo(720,y);
		myCtx.stroke();
		y = y + 40;
	}; //end for loop
} //end drawGrid

function drawLabel(myCanvas, myCtx) {
	myCtx.fillStyle = "#c6ccd3";
	myCtx.fillRect(0, 0, 720, 40);
	var daysArray = new Array("Times", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday");
	var x = 60;
	for(i=0; i<6; i++) {
		myCtx.fillStyle = "black";
		myCtx.font = "bold 15px sans-serif";
		myCtx.textAlign = "center";
		myCtx.textBaseline = "middle";
		myCtx.fillText(daysArray[i], x, 20);
		x= x + 120;
	}; //end for loop
} //end drawLabel

function drawTimes(myCanvas, myCtx) {
	var timeArray = new Array("8.00a-9.00a", "9.00a-10.00a","10.00a-11.00a","11.00a-12.00p",
								"12.00p-1.00p","1.00p-2.00p","2.00p-3.00p","3.00p-4.00p",
								"4.00p-5.00p","5.00p-6.00p");
	var y = 20;
	for(i=0;i<10;i++) {
		myCtx.fillStyle = "black"
		myCtx.font = "bold 12px sans-serif";
		myCtx.textAlign = "center";
		myCtx.textBaseline = "middle";
		myCtx.fillText(timeArray[i], 60, y);
		y = y + 40;
	}; //end for loop
} //end drawTimes