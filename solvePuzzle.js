var tempYClues, tempXClues, xClues, yClues;

function solvePuzzle(tableID, puzzle) {
	phase = "solve";
	var width = puzzle.width;
	var height = puzzle.height;
	xClues = puzzle.clueArray[0];
	yClues = puzzle.clueArray[1];
	
	tableMaker(tableID, puzzle);
	clueInjector(tableID, puzzle);
	
	tempYClues = generateClueArray(createBinaryStringArray(tableID));
	tempXClues = generateClueArray(createBinaryStringArrayColumns(tableID));	
}

Element.prototype.solveToggleClass = function(){
	this.toggleClass();
	var classes = this.className.split(' ');
	var rowClass = classes[0];
	var cellClass = classes[1];
	var row = rowClass[3];
	var cell = cellClass[4];
	var binaryArrays = createStringsForCell($("td." + rowClass + "." + cellClass));
	var xClue = generateClue(binaryArrays.columnString);
	var yClue = generateClue(binaryArrays.rowString);
	tempYClues[row] = yClue;
	tempXClues[cell] = xClue;
	
	for (i = 0; i < yClues[row].length; i++){
		if (yClue[i]==undefined){
			yClue[i]==0;
			$("span.row" + row + "Clue" + i).removeClass("correct");
		} 
		
		if (yClue[i] == yClues[row][i]) {
			$("span.row"+row+"Clue"+i).addClass("correct")
		} else {
			$("span.row"+row+"Clue"+i).removeClass("correct")
		}
	}
	
	for (i = 0; i < xClues[cell].length; i++){
		if (xClue[i]==undefined){
			xClue[i]==0;
			$("span.cell" + cell + "Clue" + i).removeClass("correct");
		} 
		
		if (xClue[i] == xClues[cell][i]) {
			$("span.cell"+cell+"Clue"+i).addClass("correct")
		} else {
			$("span.cell"+cell+"Clue"+i).removeClass("correct")
		}
	}
	
	if (JSON.stringify(tempYClues) == JSON.stringify(yClues) && JSON.stringify(tempXClues) == JSON.stringify(xClues)) {
		$("#puzzle").html("<h1>You win!</h1>")
	}
}