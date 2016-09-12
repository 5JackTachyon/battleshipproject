// sets grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;

var rowser = 10;
var colser = 10;
var squareSizer = 50;
var pixeler = 900;

var letterArray = ["A","B","C","D","E","F","G","H","I","J"];
var letterArrayer = ["A","B","C","D","E","F","G","H","I","J"];
var letter;
var number;
var letterer;
var numberer;
var hits = 0;
var hitCount = 16;
var hitser = 0;
var hitCounter = 16;
var fireCoordinate;
var inputCoordinate;
var fireCoordinater;
var inputCoordinater;

var letterPlace;
// gets the container element
var gameBoardContainer = document.getElementById("gameboard");

var gameBoardContainerer = document.getElementById("gameboarder");
// you can use this to convert your letters into numbers for use
// with the 2D array
var letterConversion = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9
}

var letterConversioner = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9
}

// makes the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		// creates a new div HTML element for each grid square and makes it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;
		square.className = "boardSquare";

		// THIS IS WHERE YOU WILL ADD CODE FOR PART 1 TO ADD TEXT TO EACH SQUARE

    square.textContent += i+1;

		square.textContent = letterArray[j] + (i + 1);

		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';


	}
}







// makes the grid columns and rows
for (k = 0; k < colser; k++) {
	for (l = 0; l < rowser; l++) {

		// creates a new div HTML element for each grid square and makes it the right size


		var squarer = document.createElement("div");
		gameBoardContainer.appendChild(squarer);
    // give each div element a unique id based on its row and column, like "s00"


		squarer.id = 's' + l + k;
		squarer.className = "boardSquarer";
		// THIS IS WHERE YOU WILL ADD CODE FOR PART 1 TO ADD TEXT TO EACH SQUARE


		squarer.textContent += k+1;

		squarer.textContent = letterArrayer[l] + (k + 1);
		// set each grid square's coordinates: multiples of the current row or column number

		var topPositioner = l * squareSizer + pixeler;
		var leftPositioner = k * squareSizer;
		// use CSS absolute positioning to place each grid square on the page

		squarer.style.top = topPositioner + 'px';
		squarer.style.left = leftPositioner + 'px';
		console.log(squarer);
	}
}








// Hardcoded 2D array to indicate where the ships are placed
var gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

function inputShip() {
	inputCoordinate = document.getElementById("inputBox").value;
	letter = inputCoordinate.substring(0,1);
	number = inputCoordinate.substring(1,3) - 1;
	letterPlace = letterConversion[letter];
	if(gameBoard[letterPlace][number] == 0) {
		gameBoard[letterPlace][number] = 1;
	}
}

function fireTorpedo() {

	// Your game logic will go here!
	fireCoordinate = document.getElementById("textBox").value;
	console.log(fireCoordinate);
	letter = fireCoordinate.substring(0,1);
	number = fireCoordinate.substring(1,3) - 1;
	letterPlacer = letterConversion[letter];
	if(gameBoard[letterPlace][number] == 0) {
		document.getElementById("s"+[letterPlace]+number).style.backgroundColor = "blue";
		 document.getElementById("hit").textContent = "Miss!";
	}
	else if(gameBoard[letterPlace][number] == 1 && document.getElementById("s"+[letterPlace]+number).style.backgroundColor != "red"){
	 document.getElementById("s"+[letterPlace]+number).style.backgroundColor = "red";
	 document.getElementById("count").textContent = hitCount + " hits left";
	 document.getElementById("hit").textContent = "Hit!";
	 hits++;
	 hitCount--;
	 console.log(hits);
	}


document.getElementById("count");
document.getElementById("textBox").value = null;
if(hits == 17) {
	gameBoardContainer.textContent = "The Fleet Has Been Neutralized, You Did It!"

}

}









var gameBoarder = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

function inputShiper() {
	inputCoordinater = document.getElementById("inputBoxer").value;
	letterer = inputCoordinater.substring(0,1);
	numberer = inputCoordinater.substring(1,3) - 1;
	letterPlacer = letterConversioner[letterer];
	if(gameBoarder[letterPlacer][numberer] == 0) {
		gameBoarder[letterPlacer][numberer] = 1;
	}
}

function fireTorpedoer() {

	// Your game logic will go here!
	fireCoordinater = document.getElementById("textBoxer").value;
	console.log(fireCoordinater);
	letterer = fireCoordinater.substring(0,1);
	numberer = fireCoordinater.substring(1,3) - 1;
	letterPlacer = letterConversioner[letterer];
	if(gameBoarder[letterPlacer][numberer] == 0) {
		document.getElementById("s"+[letterPlacer]+numberer).style.backgroundColor = "blue";
		 document.getElementById("hiter").textContent = "Miss!";
	}
	else if(gameBoarder[letterPlacer][numberer] == 1 && document.getElementById("s"+[letterPlacer]+numberer).style.backgroundColor != "red"){
	 document.getElementById("s"+[letterPlacer]+numberer).style.backgroundColor = "red";
	 document.getElementById("counter").textContent = hitCounter + " hits left";
	 document.getElementById("hiter").textContent = "Hit!";
	 hitser++;
	 hitCounter--;
	 console.log(hitser);
	}


document.getElementById("counter");
document.getElementById("textBoxer").value = null;
if(hitser == 17) {
	gameBoardContainerer.textContent = "The Fleet Has Been Neutralized, You Did It!"

}

}
