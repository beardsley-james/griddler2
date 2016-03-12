function createStringsForCell(tableCell){
	var classes = tableCell.attr('class').split(' ');
	var row = $("td." + classes[0]);
	var column = $("td." + classes[1]);
	
	var columnString = createString(column);
	var rowString = createString(row);
	
	return {
		"columnString": columnString,
		"rowString": rowString
	}
}

function createString(arrayOfElements){
	var binaryString = "";
	
	for (var i = 0; i < arrayOfElements.length; i++){
		if (arrayOfElements[i].hasClassName("black")){
			binaryString += "1"
		} else if (arrayOfElements[i].hasClassName("flag")){
			binaryString += "2"
		} else {binaryString += "0"}
	}
	
	return binaryString
}

function createBinaryStringArray(puzzleID){
	var puzzle = $("#" + puzzleID);
	var height = $("#" + puzzleID + " tr").length - 1;
	var binaryArray = [];
	for (var i = 0; i < height; i++){
		binaryArray.push(createString($("td.row" + i)))
	}
/*	for (var row in binaryArray) {
		console.log("\n" + row + ">" + binaryArray[row] + "\n  " + samplePuzzle.binaryArray[row])
		if (binaryArray[row] == samplePuzzle.binaryArray[row]) {console.log("This one's good")}
		else {console.log("What's up with this one?")}
	} */
	
	return binaryArray
}

function createBinaryStringArrayColumns(puzzleID){
	var puzzle = $("#" + puzzleID);
	var width = $("#" + puzzleID + " tr").first().children().length - 1;
	var binaryArray = [];
	
	for (var i = 0; i < width; i++) {
		binaryArray.push(createString($("td.cell" + i)))
	}
	
	return binaryArray
}