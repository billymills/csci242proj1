window.onload = init;

function init() {
	//code for main grid canvas
	var canvasDiv = document.getElementById("canvasDiv");
	canvasDiv.innerHTML = "<canvas width='600' height='400' id='myCanvas'></canvas>";
	var myCanvas = document.getElementById("myCanvas");
	var myCanvasContext = myCanvas.getContext("2d");
	
	//call function to draw grid
	drawGrid(myCanvas, myCanvasContext);
	
	//code for header canvas
	var headerCanvas = document.getElementById("headerCanvasDiv");
	headerCanvasDiv.innerHTML = "<canvas width='600' height='40' id='myHeaderCanvas'></canvas>";
	var myHeaderCanvas = document.getElementById("myHeaderCanvas");
	var myHeaderCtx = myHeaderCanvas.getContext("2d");
	drawLabel(myHeaderCanvas, myHeaderCtx);
} //end init

function drawGrid(myCanvas, myCtx) {
	//var and for loop to draw vertical lines
	var x = 120;
	for(i=0; i<4; i++) {
		myCtx.beginPath();
		myCtx.moveTo(x,0);
		myCtx.lineTo(x,500);
		myCtx.stroke();
		x = x+120;
	}; //end for loop

	//var and for loop to draw horizontal lines
	var y = 40;
	for(i=0; i<10; i++) {
		myCtx.beginPath();
		myCtx.moveTo(0,y);
		myCtx.lineTo(600,y);
		myCtx.stroke();
		y = y + 40;
	}; //end for loop
} //end drawGrid

function drawLabel(myCanvas, myCtx) {
	var daysArray = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");
	var x = 60;
	for(i=0; i<5; i++) {
		myCtx.fillStyle = "black";
		myCtx.font = "bold 15px sans-serif";
		myCtx.textAlign = "center";
		myCtx.textBaseline = "middle";
		myCtx.fillText(daysArray[i], x, 20);
		x= x + 120;
	}; //end for loop
} //end drawLabel