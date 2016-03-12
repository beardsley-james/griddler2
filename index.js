$("#navigation").html("<h1>Pick One</h1>" +
	"<button id='solveAPuzzle'>Solve a Puzzle</button>" +
	"<button id='createAPuzzle'>Create a Puzzle</button>")
	
$("#navigation").on("click", "button#solveAPuzzle", function(e){
	var buttonStream = "<div id='puzzleSelectionMenu'><h1>Choose a puzzle</h1>";
	for (i=0; i<puzzleList.length; i++){
		buttonStream += "<button id='" + puzzleList[i].id + "'>";
		buttonStream += puzzleList[i].name + " " + puzzleList[i].width + "x" + puzzleList[i].height;
		buttonStream += "</button>"
	}
	buttonStream += "</div>"
	$("#navigation").html(buttonStream)
})

$("#navigation").on("click", "#puzzleSelectionMenu > button", function(e){
	$("#navigation").toggle();
	solvePuzzle("puzzle", eval(e.target.id));
})

$("#navigation").on("click", "button#createAPuzzle", function(e){
	$("#navigation").html("Width: <input type='text' id='createAPuzzleWidth'></br>" +
		"Height: <input type='text' id='createAPuzzleHeight'></br>" +
		"<button id='startCreation'>Create your puzzle</button>")
})

$("#navigation").on("click", "button#startCreation", function(e){
	newPuzzle.height = $("#createAPuzzleHeight").val();
	if (!newPuzzle.height) {
		newPuzzle.height = 10
	}
	newPuzzle.width = $("#createAPuzzleWidth").val();
	if (!newPuzzle.width) {
		newPuzzle.width = 10
	}
	$("#navigation").html("Puzzle name:<input type='text' id='createAPuzzleName'>" +
		"<button id='submitPuzzle'>Submit Puzzle</button></br>");
	createPuzzle("puzzle")
})

$("#navigation").on("click", "button#submitPuzzle", function(e){
	newPuzzle.name = $("#createAPuzzleName").val();
	createPuzzleOutputObject()
})

$("#puzzle").on("click", "td", function(e){
	if (phase == "solve"){
		e.target.solveToggleClass();
	} else if (phase == "create"){
		e.target.createToggleClass();
	}
})