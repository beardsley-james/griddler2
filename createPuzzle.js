var newPuzzle = {
	"name": "",
	"width": 10,
	"height": 10,
	binaryArray: [],
	clueArray: []
};

function createPuzzle (tableID) {
	phase = "create";
	tableMaker(tableID, newPuzzle);
	newPuzzle.clueArray.push(generateClueArray(createBinaryStringArrayColumns(tableID)));
	newPuzzle.clueArray.push(generateClueArray(createBinaryStringArray(tableID)))
}

Element.prototype.createToggleClass = function() {
	this.toggleClass();
	var classes = this.className.split(' ');
	var rowClass = classes[0];
	var cellClass = classes[1];
	var row = rowClass[3];
	var cell = cellClass[4];
	var binaryArrays = createStringsForCell($("td." + rowClass + "." + cellClass));
	var xClue = generateClue(binaryArrays.columnString);
	var yClue = generateClue(binaryArrays.rowString);
	newPuzzle.clueArray[0][cell] = xClue;
	newPuzzle.clueArray[1][row] = yClue;
	clueInjector("puzzle", newPuzzle);
}

function createPuzzleOutputObject(){
	newPuzzle.binaryArray = createBinaryStringArray("puzzle");
	$("#clueObject").html(JSON.stringify(newPuzzle))
}